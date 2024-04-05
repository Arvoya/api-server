const express = require("express");
const { asana } = require("../models/");

const router = express.Router();

router.get("/", async (req, res) => {
  let records = await asana.findAll();
  res.send(records);
});

router.post("/", async (req, res) => {
  let record = await asana.create(req.body);
  res.json(record);
});

module.exports = router;
