const routes = require("express").Router();
const TipoPratoController = require("./TipoPratoController");

routes.get("/getTipoPrato", TipoPratoController.getTipoPrato);
routes.get("/getTipoPrato/:id", TipoPratoController.getTipoPratoById);
routes.put("/putTipoPrato/:id", TipoPratoController.updateTipoPrato);
routes.post("/removeTipoPrato/:id", TipoPratoController.removeTipoPratoById);
routes.post("/addTipoPrato", TipoPratoController.insertTipoPrato);

module.exports = routes;
