const routes = require("express").Router();
const ReceitaController = require("./ReceitaController");


routes.get("/getRecomendados/:principal", ReceitaController.getRecomendadoPrincipal);

module.exports = routes;