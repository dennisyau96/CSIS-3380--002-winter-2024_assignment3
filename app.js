//import and setup
const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", __dirname + "/views");

//
app.get("/", (req, res) => {
  res.render("bmi");
});
app.post("/", (req, res) => {
  const weight = Number(req.body.weight);
  const height = Number(req.body.height);

  const BMI = (weight / Math.pow(height / 100, 2)).toFixed(2);
  const results = `Your BMI result is ${BMI}`;
  res.render("bmi", { results }); //very important
});

//
app.listen(port, () => {
  console.log("server running on port " + port);
});
