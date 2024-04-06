const express = require("express");
const { Collection, Pranayama } = require("../models/");

const router = express.Router();

const PranayamaCollection = new Collection(Pranayama);

router.get("/", async (req, res) => {
  let pranayamas = await PranayamaCollection.read();
  res.send(pranayamas);
});

router.get("/:id", async (req, res) => {
  let pranayamas = await PranayamaCollection.read(req.params.id);
  res.send(pranayamas);
});

router.post("/", async (req, res) => {
  let pranayama = await PranayamaCollection.create(req.body);
  res.json(pranayama);
});

router.put("/:id", async (req, res) => {
  let pranayama = await PranayamaCollection.update(req.params.id, req.body);
  res.json(pranayama);
});

router.delete("/:id", async (req, res) => {
  let response = await PranayamaCollection.delete(req.params.id);
  res.status(200).send("number of rows deleted" + response);
});

module.exports = router;
