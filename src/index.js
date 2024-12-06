import express from "express";

const app = express();

console.log(process.env.PORT);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(80, "0.0.0.0", () => {
  console.log("Service active on Seenode ✔️");
});
