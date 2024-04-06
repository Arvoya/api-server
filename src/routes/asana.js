const express = require("express");
const { Asana, Collection } = require("../models/");

const router = express.Router();

const AsanaCollection = new Collection(Asana);

router.get("/", async (req, res) => {
  let asana = await AsanaCollection.read();
  res.send(asana);
});

router.get("/:id", async (req, res) => {
  let asana = await AsanaCollection.read(req.params.id);
  res.send(asana);
});

router.post("/", async (req, res) => {
  let asana = await AsanaCollection.create(req.body);
  res.json(asana);
});

router.put("/:id", async (req, res) => {
  let asana = await AsanaCollection.update(req.params.id, req.body);
  res.json(asana);
});

router.delete("/:id", async (req, res) => {
  let response = await AsanaCollection.delete(req.params.id);
  res.status(200).send("number of rows deleted" + response);
});

module.exports = router;
