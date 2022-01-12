const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET = process.env.SECRET;
const PORT = process.env.PORT;

const server = express();

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
