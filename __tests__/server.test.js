const { app } = require("../src/server");
const supertest = require("supertest");
const { sequelize, asana, pranayama } = require("../src/models");

const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync();
  await asana.create({
    name: "mountainPose",
    standing: true,
    sitting: false,
  });
  await pranayama.create({
    name: "nadi shodhana",
    sets: 2,
    rounds: 7,
  });
});
afterAll(async () => {
  await sequelize.drop();
});

xdescribe("Express Server", () => {
  it("Should read all asana in the database and respond with status 200", async () => {
    let response = await request.get("/api/asana");
    expect(response.status).toEqual(200);
    expect(response.body.length > 0).toBeTruthy();
  });
  it("Should create a new asana and return a status 200", async () => {
    let response = await request.post("/api/asana").send({
      name: "asana2",
      standing: false,
      sitting: false,
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual("asana2");
  });
  it("should read all pranayama in the database and respond with status 200", async () => {
    let response = await request.get("/api/pranayama");
    expect(response.status).toEqual(200);
    expect(response.body.length > 0).toBeTruthy();
  });
  it("should create a new pranayama and return a status 200", async () => {
    let response = await request.post("/api/pranayama").send({
      name: "pranayama2",
      sets: 2,
      rounds: 7,
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual("pranayama2");
  });
});
