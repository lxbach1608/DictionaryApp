const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const port = 3001;

// Http logger
// showing http request, response info in the terminal
app.use(morgan("combined"));

// config static folder
app.use(express.static(path.join(__dirname, "public")));

// Template handlebars engine
// config extension from .handlebars to .hbs
app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Root
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
