import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8080, "0.0.0.0", () => {
  console.log("Service active on Seenode ✔️");
});
