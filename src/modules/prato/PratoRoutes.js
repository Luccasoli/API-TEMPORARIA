const routes = require("express").Router();
const PratoController = require("./PratoController");

routes.get("/getPratos", PratoController.getPratos);
routes.get("/getPrato/:id", PratoController.getPratoById);
routes.put("/putPrato/:id", PratoController.updatePrato);
routes.post("/removePrato/:id", PratoController.removePratoById);
routes.post("/addPrato", PratoController.insertPrato);

module.exports = routes;
