const { app } = require("../src/server");
const supertest = require("supertest");
const { sequelize, Asana, Pranayama, Yogi } = require("../src/models");

const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync();
  await Yogi.create({
    name: "OM",
  });
  await Asana.create({
    name: "mountainPose",
    standing: true,
    sitting: false,
    yogiID: 1,
  });
  await Pranayama.create({
    name: "nadi shodhana",
    sets: 2,
    rounds: 7,
    yogiID: 1,
  });
});
afterAll(async () => {
  await sequelize.drop();
});

describe("Pranayama Tests", () => {
  it("should read all pranayama in the database and respond with status 200", async () => {
    let response = await request.get("/api/pranayama/");
    expect(response.status).toEqual(200);
    expect(response.body.length > 0).toBeTruthy();
  });
  it("should read 1 pranayama in the database and respond with status 200", async () => {
    let response = await request.get("/api/pranayama/1");
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual("nadi shodhana");
  });
  it("should create a new pranayama and return a status 200", async () => {
    let response = await request.post("/api/pranayama/").send({
      name: "pranayama2",
      sets: 2,
      rounds: 7,
      yogiID: 1,
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual("pranayama2");
  });

  it("should update a pranayama and return a status 200", async () => {
    let response = await request.put("/api/pranayama/1").send({
      name: "shitali",
      sets: 2,
      rounds: 14,
      yogiID: 1,
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual("shitali");
  });
  it("should delete a pranayama and return a status 200", async () => {
    let response = await request.delete("/api/pranayama/1");
    expect(response.status).toEqual(200);
  });
});

describe("Asana Tests", () => {
  it("Should read all asana in the database and respond with status 200", async () => {
    let response = await request.get("/api/asana/");
    expect(response.status).toEqual(200);
    expect(response.body.length > 0).toBeTruthy();
  });
  it("should read 1 asana and return a status 200", async () => {
    let response = await request.get("/api/asana/1");
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual("mountainPose");
  });
  it("Should create a new asana and return a status 200", async () => {
    let response = await request.post("/api/asana/").send({
      name: "asana2",
      standing: false,
      sitting: false,
      yogiID: 1,
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual("asana2");
  });
  it("Should update a current asana and return a status 200", async () => {
    let response = await request.put("/api/asana/2").send({
      name: "asanaUpdate",
      standing: true,
      sitting: false,
      yogiID: 1,
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual("asanaUpdate");
  });
  it("should delete a asana and return a status 200", async () => {
    let response = await request.delete("/api/asana/1");
    expect(response.status).toEqual(200);
  });
});

describe("Yogi Tets", () => {
  it("should read all yogi's and return a status 200", async () => {
    let response = await request.get("/api/yogi/");
    expect(response.status).toEqual(200);
    expect(response.body.length > 0).toBeTruthy();
  });
  it("should read 1 yogi and return a status 200", async () => {
    let response = await request.get("/api/yogi/1");
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual("OM");
  });
  it("should create a new yogi and return a status 200", async () => {
    let response = await request.post("/api/yogi/").send({
      name: "Adi Shankaracharya",
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual("Adi Shankaracharya");
  });
  it("should update a yogi and return a status 200", async () => {
    let response = await request.put("/api/yogi/2").send({
      name: "Adi Yogi",
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual("Adi Yogi");
  });
  it("should delete a yogi and return a status 200", async () => {
    let response = await request.delete("/api/yogi/2");
    expect(response.status).toEqual(200);
  });
});

describe("fail tests", () => {
  it("should fail when a wrong route is tried", async () => {
    let response = await request.get("/wrongPath");
    expect(response.status).toEqual(404);
    expect(response.text).toEqual("Invalid route");
  });

  it("should fail when trying to make an incorrect yogi", async () => {
    let response = await request.post("/api/yogi/").send({
      Name: "yo yo",
    });

    expect(response.status).toEqual(500);
    expect(response.text).toEqual("Server Error");
  });
});
