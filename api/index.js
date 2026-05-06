const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, Grace 2026-05-06 from Express on Vercel 🚀");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello API route!" });
});

// Export the app as a serverless function
module.exports = app;