const express = require("express");
const router = require("../routes");
require("dotenv").config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.static("public", {}));
// Routers
app.use("/api", router);

// Main Route
app.get("/", (_req, res) => {
  res.sendFile("index.html");
});

// Export module
module.exports = app;
