import express from "express";

const app = express();

app.listen(8000, (req, res) => {
  res.send("express server");
});
