const express = require("express");
const { Collection, Pranayama } = require("../models/");

const router = express.Router();

const PranayamaCollection = new Collection(Pranayama);

router.get("/", async (req, res) => {
  let pranayamas = await PranayamaCollection.read();
  res.send(pranayamas);
});

router.post("/", async (req, res) => {
  let pranayama = await PranayamaCollection.create();
  res.json(pranayama);
});

router.put("/:id", async (req, res) => {
  let pranayama = await PranayamaCollection.update(req.body);
  res.json(pranayama);
});

module.exports = router;
