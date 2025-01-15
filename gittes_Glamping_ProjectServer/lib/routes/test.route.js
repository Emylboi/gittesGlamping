import express from "express";

const test = express.Router();

// Get
test.post("/test", async (req, res) => {
  const { name } = req.body;

  res.status(200).json({ message: `Hello ${name}` });
});

export default test;
