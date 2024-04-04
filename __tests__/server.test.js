const { app } = require("../src/server");
const supertest = require("supertest");
const { sequelize, asana } = require("../src/models");

const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync();
  await asana.create({
    name: "mountainPose",
    standing: true,
    sitting: false,
  });
});
afterAll(async () => {
  await sequelize.drop();
});

describe("Express Server", () => {
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
    // console.log("FIND ME", response);

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual("asana2");
  });
});