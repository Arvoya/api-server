const { sequelize, Asana, Pranayama, Yogi } = require("../src/models");

beforeAll(async () => {
  await sequelize.sync();
});

describe("Model Creation", () => {
  it("should make a yogi based of the yogi schema", async () => {
    const yogi = await Yogi.create({
      name: "OM",
    });

    expect(yogi.name).toEqual("OM");
  });
  it("should make a table based off the asana schema", async () => {
    const mountainPose = await Asana.create({
      name: "mountainPose",
      standing: true,
      sitting: false,
      yogiID: 1,
    });

    expect(mountainPose.name).toEqual("mountainPose");
    expect(mountainPose.standing).toEqual(true);
    expect(mountainPose.sitting).toEqual(false);
  });

  it("should make a table based off the pranayama Schema", async () => {
    const nadiShodhana = await Pranayama.create({
      name: "Nadi Shodhana",
      sets: 2,
      rounds: 7,
      yogiID: 1,
    });

    expect(nadiShodhana.name).toEqual("Nadi Shodhana");
    expect(nadiShodhana.sets).toEqual(2);
    expect(nadiShodhana.rounds).toEqual(7);
  });
});
