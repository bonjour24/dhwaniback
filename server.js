"use strict";
const express = require("express");
const mongo = require("mongoose");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
const parser = require("body-parser");
const routes = require("./api/controller");
const distRoutes = require("./api/districtController");
const stateRoute = require("./api/stateController");
const childRoute = require("./api/childController");
const passport = require("passport");
const app = express();

require("./models/database");
require("./config/passport")(passport);

const urlencodedParser = parser.urlencoded({ extended: true });
const PORT = 3000;

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(urlencodedParser);
app.use(parser.json());
app.use("/", routes);
app.use("/dist", distRoutes);
app.use("/state", stateRoute);
app.use("/child", childRoute);

app.listen(PORT, () => console.log("Server Running on port :" + PORT));
