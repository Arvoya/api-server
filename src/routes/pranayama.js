const express = require("express");
const { Collection, Pranayama } = require("../models/");

const router = express.Router();

const PranayamaCollection = new Collection(Pranayama);

router.get("/", async (req, res) => {
  let pranayamas = await PranayamaCollection.read();
  res.send(pranayamas);
});

router.post("/", async (req, res) => {
  let pranayama = await PranayamaCollection.create(req.body);
  res.json(pranayama);
});

router.put("/:id", async (req, res) => {
  console.log("I AM THE PARAMS", req.params);
  let pranayama = await PranayamaCollection.update(req.params.id, req.body);
  res.json(pranayama);
});

module.exports = router;
