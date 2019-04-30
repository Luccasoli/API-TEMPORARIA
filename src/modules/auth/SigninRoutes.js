const routes = require("express").Router();
const SigninController = require("./SigninController");

routes.post("/signin", SigninController.signin);

module.exports = routes;
