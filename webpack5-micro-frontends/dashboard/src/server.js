const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");


app.use("/", express.static(path.resolve(__dirname, "../dist")));

// server same html file for any url
app.get("*", function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/dashboard.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

app.listen(9000, function () {
  console.log("Application is running on http://localhost:9000");
});
