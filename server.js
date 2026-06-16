const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ success: true, message: "Backend deployed successfully!" });
});

app.get("/api/contact", (req, res) => {
  res.json({ success: true, message: "Contact API works!" });
});

// 👇 Important: Do NOT use app.listen()
module.exports = app;
