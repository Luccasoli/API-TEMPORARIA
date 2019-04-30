const routes = require("express").Router();
const TiposPratoController = require("./TiposPratoController");

routes.get("/getTiposPrato", TiposPratoController.getTiposPrato);
routes.get("/getTiposPrato/:id", TiposPratoController.getTiposPratoById);
routes.put("/putTiposPrato/:id", TiposPratoController.updateTiposPrato);
routes.post("/removeTiposPrato/:id", TiposPratoController.removeTiposPratoById);
routes.post("/addTiposPrato", TiposPratoController.insertTiposPrato);

module.exports = routes;
