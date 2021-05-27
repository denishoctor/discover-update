const express = require("express");
const handlebars = require("express-handlebars");

const app = express();

app.engine(
  "handlebars",
  handlebars({
    layoutsDir: "./templates",
  })
);
app.set("view engine", "handlebars");
app.use("/assets", express.static("assets"));

app.get("/discover/new-kitten-guide", (req, res) => {
  res.render("new-kitten-guide");
});

app.get("/discover/new-puppy-guide", (req, res) => {
  res.render("new-puppy-guide");
});

app.get("/discover/preparing-for-a-puppy", (req, res) => {
  res.render("preparing-for-a-puppy");
});

// Fallback for other resource we don't have
app.all("*", (req, res) => {
  const path = req.path;
  if (path.includes("_files/"))
    res.redirect(
      `https://storage.googleapis.com/petcircle-assets/images/blog/${
        path.split("_files/")[1]
      }`
    );
  else res.redirect(`https://www.petcircle.com.au${req.path}`);
});

app.listen(3000, () => console.log("listening on :3000"));
