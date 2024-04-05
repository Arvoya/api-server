const express = require("express");
const cors = require("cors");
const yogiRoute = require("./routes/sqlRouter");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", yogiRoute);

module.exports = {
  start: (port) =>
    app.listen(port, () => {
      console.log("API SERVER RUNNING ON PORT: ", port);
    }),
  app,
};
