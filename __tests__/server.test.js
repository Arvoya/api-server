xdescribe("Model Creation", () => {
  it("should make a table based off the asana schema", async () => {
    const mountainPose = await asana.create({
      name: "mountainPose",
      standing: true,
      sitting: false,
    });

    expect(mountainPose.name).toEqual("mountainPose");
    expect(mountainPose.standing).Equal(true);
    expect(mountainPose.sitting).Equal(false);
  });
});
