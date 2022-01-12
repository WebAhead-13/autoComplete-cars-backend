const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// const public = require("./public");
const app = require("./app");

const SECRET = process.env.SECRET;
const PORT = 3000;

const server = express();

// server.get("/", (req, res) => {
//   const html = app.home();
//   res.send(html);
// });
server.get("/log-in", (req, res) => {
  res.send(app.logIn());
});

server.post("/log-in", (req, res) => {
  const email = req.body.email;
  const token = jwt.sign({ email }, SECRET);
  res.cookie("user", token, { maxAge: 1200000 });
  res.redirect("/profile");
});

server.get("/log-out", (req, res) => {
  res.clearCookie("user");
  res.redirect("/");
});

server.get("/autocomplete", (res, req) => {});

function checkAuth(req, res, next) {
  const user = req.user;
  if (!user) {
    res.status(401).send(`
        <h1>Please log in to view this page</h1>
        <a href="/log-in">Log in</a>
      `);
  } else {
    next();
  }
}
server.use(express.static("public"));

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
