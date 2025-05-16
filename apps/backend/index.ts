import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("ping from express!");
});
app.listen(8000, () => {
  console.log("express server error");
});
