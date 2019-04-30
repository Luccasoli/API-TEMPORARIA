const routes = require("express").Router();
const AvaliacaoController = require("./AvaliacaoController");

routes.get("/getAvaliacoes", AvaliacaoController.getAvaliacoes);
routes.get("/getAvaliacao/:id", AvaliacaoController.getAvaliacaoById);
routes.put("/putAvaliacao/:id", AvaliacaoController.updateAvaliacao);
routes.post("/removeAvaliacao/:id", AvaliacaoController.removeAvaliacaoById);
routes.post("/addAvaliacao", AvaliacaoController.insertAvaliacao);

module.exports = routes;
