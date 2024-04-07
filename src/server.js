const express = require("express");
const cors = require("cors");
const yogiRoute = require("./routes/yogiRouter");
const notFound = require("./error-handlers/404");
const serverError = require("./error-handlers/500");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", yogiRoute);

app.use(serverError);
app.use(notFound);

module.exports = {
  start: (port) =>
    app.listen(port, () => {
      console.log("API SERVER RUNNING ON PORT: ", port);
    }),
  app,
};
