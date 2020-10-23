///////////////////////////
// Environmental Variables
///////////////////////////
require("./envfunc")();

const {
  PORT = 3000,
  SECRET = "secret",
  NODE_ENV = "development",
} = process.env;
console.log(PORT);

//CORS
const cors = require("cors");
const corsOptions = require("./configs/cors.js");

//AUTH
const jwt = require("jsonwebtoken");
const { auth } = require("./configs/auth.js");

//Bringing in Express
const express = require("express");
const app = express();

//OTHER IMPORTS
const morgan = require("morgan");
const catRouter = require("./controllers/Cats");

////////////
//MIDDLEWARE
////////////
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("tiny")); //logging

///////////////
//Routes and Routers
//////////////
app.get("/", (req, res) => {
  res.json({ hello: "Hello World!" });
});

app.use("/cat", catRouter);

//These routes are to generate a test JWT and test out your auth function from auth.js
app.get("/testauth", auth(SECRET), (req, res) => {
  res.json(req.payload);
});

app.get("/testjwt", (req, res) => {
  const token = jwt.sign({ hello: "world" }, SECRET);
  res.json({ token });
});

//LISTENER
app.listen(PORT, () => {
  console.log(`Your are listening on port ${PORT}`);
});
