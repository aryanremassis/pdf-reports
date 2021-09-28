const pdf = require("pdf-creator-node");
const fs = require("fs");
const html = fs.readFileSync("./template/template.html", "utf-8");
const data = require("./data.json");

const document = {
  html: html,
  path: "./output.pdf",
  type: "",
  data: data,
};

var options = {
  format: "A4",
  orientation: "portrait",
  border: "8mm",
};

pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
