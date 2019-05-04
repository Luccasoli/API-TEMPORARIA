const routes = require("express").Router();
const IngredienteController = require("./IngredienteController");

routes.get("/getIngredientes", IngredienteController.getIngredientes);
routes.get("/getIngrediente/:id", IngredienteController.getIngredienteById);
routes.put("/putIngrediente/:id", IngredienteController.updateIngrediente);
routes.post("/removeIngrediente/:id", IngredienteController.removeIngredienteById);
routes.post("/addIngrediente", IngredienteController.insertIngrediente);

routes.get("/getIngredientesByReceita/:id", IngredienteController.getIngredientesByReceita);

module.exports = routes;
