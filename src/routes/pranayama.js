const express = require("express");
const { pranayama } = require("../models/");

const router = express.Router();

router.get("/", async (req, res) => {
  let records = await pranayama.findAll();
  res.send(records);
});

router.post("/", async (req, res) => {
  let record = await pranayama.create(req.body);
  res.json(record);
});

module.exports = router;
