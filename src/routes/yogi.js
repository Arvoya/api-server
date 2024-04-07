const express = require("express");
const { Yogi, Collection } = require("../models/");

const router = express.Router();

const YogiCollection = new Collection(Yogi);

router.get("/", async (req, res, next) => {
  try {
    let yogi = await YogiCollection.read();
    res.send(yogi);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let yogi = await YogiCollection.read(req.params.id);
    res.send(yogi);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let yogi = await YogiCollection.create(req.body);
    res.json(yogi);
  } catch (e) {
    next(e);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    let yogi = await YogiCollection.update(req.params.id, req.body);
    res.send(yogi);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    let response = await YogiCollection.delete(req.params.id);
    res.status(200).send("number of rows deleted" + response);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
