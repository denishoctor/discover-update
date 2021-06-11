const express = require("express");
const handlebars = require("express-handlebars");
const fs = require("fs");

const app = express();

app.engine(
  "handlebars",
  handlebars({
    layoutsDir: "./templates",
  })
);
app.set("view engine", "handlebars");
app.use("/assets", express.static("assets"));

app.get("/collections/new-kitten", (req, res) => {
  res.render("collections/new-kitten");
});

app.get("/discover/new-kitten-guide", (req, res) => {
  res.render("discover/new-kitten-guide");
});

app.get("/discover/new-puppy-guide", (req, res) => {
  res.render("discover/new-puppy-guide");
});

app.get("/discover/preparing-for-a-puppy", (req, res) => {
  res.render("discover/preparing-for-a-puppy");
});

app.get("/discover/preparing-for-a-puppy_files/schedule.html", (req, res) => {
  res.redirect(
    "https://app.acuityscheduling.com/schedule.php?owner=19197814&owner=19197814&appointmentType=category:New%20Pet%20Advice"
  );
});

app.get(
  "/discover/preparing-for-a-puppy_files/embed.js.download",
  (req, res) => {
    res.redirect("https://embed.acuityscheduling.com/js/embed.js");
  }
);

app.get("/", (req, res) => {
  res.send(`<ul>
    <li><a href="/discover/new-kitten-guide">new kitten guide</a></li>
    <li><a href="/discover/new-puppy-guide">new puppy guide</a></li>
    <li><a href="/discover/preparing-for-a-puppy">preparing for a puppy</a></li>
    <li><a href="/collections/new-kitten">kitten landing page</a></li>
  </ul>`);
});

// Fallback for other resource we don't have
app.all("*", (req, res) => {
  const path = req.path;
  const isAsset = fs.existsSync(`./assets${path}`);

  if (isAsset) res.redirect(`/assets${path}`);
  else if (path.includes("_files/"))
    res.redirect(
      `https://storage.googleapis.com/petcircle-assets/images/blog/${
        path.split("_files/")[1]
      }`
    );
  else res.redirect(`https://www.petcircle.com.au${req.path}`);
});

app.listen(3000, () => console.log("listening on :3000"));
