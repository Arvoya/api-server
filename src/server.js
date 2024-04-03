const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

module.exports = {
  start: (port) =>
    app.listen(port, () => {
      console.log("API SERVER RUNNING ON PORT: ", port);
    }),
  app,
};
