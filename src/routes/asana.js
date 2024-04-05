const express = require("express");
const { Asana, Collection } = require("../models/");

const router = express.Router();

const AsanaCollection = new Collection(Asana);

router.get("/", async (req, res) => {
  let asana = await AsanaCollection.read();
  res.send(asana);
});

router.post("/", async (req, res) => {
  let asana = await AsanaCollection.create(req.body);
  res.json(asana);
});

module.exports = router;
