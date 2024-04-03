const { sequelize, asana, pranayama } = require("../src/models");

beforeAll(async () => {
  await sequelize.sync();
});

describe("Model Creation", () => {
  it("should make a table based off the asana schema", async () => {
    const mountainPose = await asana.create({
      name: "mountainPose",
      standing: true,
      sitting: false,
    });

    expect(mountainPose.name).toEqual("mountainPose");
    expect(mountainPose.standing).toEqual(true);
    expect(mountainPose.sitting).toEqual(false);
  });

  it("should make a table based off the pranayama Schema", async () => {
    const nadiShodhana = await pranayama.create({
      name: "Nadi Shodhana",
      sets: 2,
      rounds: 7,
    });

    expect(nadiShodhana.name).toEqual("Nadi Shodhana");
    expect(nadiShodhana.sets).toEqual(2);
    expect(nadiShodhana.rounds).toEqual(7);
  });
});
