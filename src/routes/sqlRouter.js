const express = require("express");
const asanaRoute = require("./asana.js");
const yogiRoute = require("./yogi.js");
const pranayamaRoute = require("./pranayama.js");

const router = express.Router();

router.use("/asana", asanaRoute);
router.use("/pranayama", pranayamaRoute);
router.use("/yogi", yogiRoute);

module.exports = router;
