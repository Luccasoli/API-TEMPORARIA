const routes = require("express").Router();
const EditarReceitaController = require("./EditarReceitaController");

routes.get("/getEditarReceita", EditarReceitaController.getEditarReceita);
routes.get("/getEditarReceita/:id", EditarReceitaController.getEditarReceitaById);
routes.put("/putEditarReceita/:id", EditarReceitaController.updateEditarReceita);
routes.post("/removeEditarReceita/:id", EditarReceitaController.removeEditarReceitaById);
routes.post("/addEditarReceita", EditarReceitaController.insertEditarReceita);

module.exports = routes;
