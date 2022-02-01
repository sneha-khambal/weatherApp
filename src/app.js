const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
//env variable for port
const port = process.env.PORT || 8000;

//display static page;
const staticpath = path.join(__dirname, "../public");
app.use(express.static(staticpath));
app.use(express.static("images/"));
// console.log(staticpath)
//view engine
app.set("view engine", "hbs");
//seting path of the view directory;
const viewsPath = path.join(__dirname, "../views");
app.set("views", viewsPath);
//display webpage using template engin
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("404");
});
//set rename for view directory;
const templatepath = path.join(__dirname, "../templates/views");
app.set("views", templatepath);
const partialsepath = path.join(__dirname, "../templates/partials/");

//registred partials
hbs.registerPartials(partialsepath);

//routing
app.get("/", (req, res) => {
  res.send("welcome to thapa technical home page");
});
app.get("/about", (req, res) => {
  res.send("welcome to thapa technical about page");
});
app.get("/weather", (req, res) => {
  res.send("welcome to thapa technical weather page");
});
app.get("*", (req, res) => {
  res.send("no such page exist");
});

//listening to server
app.listen(port, () => {
  console.log(`listening to ${port}`);
});
