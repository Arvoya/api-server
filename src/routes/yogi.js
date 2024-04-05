const express = require("express");
const { Yogi, Collection } = require("../models/");

const router = express.Router();

const YogiCollection = new Collection(Yogi);

router.get("/", async (req, res) => {
  let asana = await YogiCollection.read();
  res.send(asana);
});

router.post("/", async (req, res) => {
  let asana = await YogiCollection.create(req.body);
  res.json(asana);
});

module.exports = router;
