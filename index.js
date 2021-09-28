const pdf = require("pdf-creator-node");
const fs = require("fs");
const html = fs.readFileSync("./template/template.html", "utf-8");

const document = {
  html: html,
  path: "./output.pdf",
  type: "",
  data: {},
};

var options = {
  format: "A4",
  orientation: "portrait",
  border: "10mm",
};

pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
