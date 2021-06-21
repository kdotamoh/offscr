const express = require("express");
const app = express();
const path = require("path");

const port = 1376;

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("pages/home");
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
