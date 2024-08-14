const express = require("express");
const Router = express.Router();
const simpleController = require("../controller/simple.controller");
Router.route("/register").post(simpleController.register);
Router.route("/login").post(simpleController.login);
Router.route("/").get(simpleController.getAlluser);
module.exports = Router;