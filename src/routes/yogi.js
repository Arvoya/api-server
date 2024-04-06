const express = require("express");
const { Yogi, Collection } = require("../models/");

const router = express.Router();

const YogiCollection = new Collection(Yogi);

router.get("/", async (req, res) => {
  let yogi = await YogiCollection.read();
  res.send(yogi);
});

router.get("/:id", async (req, res) => {
  let yogi = await YogiCollection.read(req.params.id);
  res.send(yogi);
});

router.post("/", async (req, res) => {
  let yogi = await YogiCollection.create(req.body);
  res.json(yogi);
});

router.put("/:id", async (req, res) => {
  let yogi = await YogiCollection.update(req.params.id, req.body);
  res.send(yogi);
});

router.delete("/:id", async (req, res) => {
  let response = await YogiCollection.delete(req.params.id);
  res.status(200).send("number of rows deleted" + response);
});

module.exports = router;
