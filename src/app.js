const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("DevOps CI/CD Project Running");
});

module.exports = app;