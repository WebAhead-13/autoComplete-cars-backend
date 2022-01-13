const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// const public = require("./public");
const app = require("./app");
const res = require("express/lib/response");
const SECRET = process.env.SECRET;
const PORT = 3000;
const json = require("./database.json");
const server = express();
server.use(cookieParser());
server.use(express.urlencoded());

server.get("/", (req, res) => {
  const html = app.home();
  res.send(html);
});
server.get("/unique_cars", (req, res) => {
  const s_car = json.unique_cars;
  res.send(s_car);
});
server.get("/log-in", (req, res) => {
  const html = app.logIn();
  res.send(html);
});

server.post("/log-in", (req, res) => {
  const email = req.body.email;
  const token = jwt.sign({ email }, SECRET);
  res.cookie("user", token, { maxAge: 1200000 });
  res.redirect("/");
});

server.get("/search/:myCar", checkAuth, (req, res) => {
  const carMake = req.params.myCar;
  const carModel = carMake.split(" ")[1];

  const myCar = json.cars.filter((car) => {
    return car.model == carModel;
  });
  console.log(carMake);
  res.send(myCar);
});

server.get("/log-out", (req, res) => {
  res.clearCookie("user");
  res.redirect("/");
});

server.get("/autocomplete/:carName", (req, res) => {
  const carName = req.params.carName;
  const carSplit = carName.split(" ");
  const myData = json.cars.filter((car) => {
    if (carSplit[1]) {
      return (
        car.make.startsWith(carSplit[0]) && car.model.startsWith(carSplit[1])
      );
    }
    return car.make.startsWith(carSplit[0]);
  });

  if (myData.length > 0) {
    res.send(myData);
  } else {
    res.send({ error: "Not Found" });
  }
});

function checkAuth(req, res, next) {
  const user = req.cookies.user;
  if (!user) {
    res.status(401).send({ error: true });
  } else {
    next();
  }
}
server.get;
server.use(express.static("public"));

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
