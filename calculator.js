const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalclulator", function (req, res) {
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var totalHeight = Number(height*height)
  var result = (weight/totalHeight).toFixed(2);
  console.log(result)
  res.send("BMI is " + result);
});



app.listen(3000, function () {
  console.log("this is port 3000");
});
