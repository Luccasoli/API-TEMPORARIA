const routes = require("express").Router();
const IngredientesReceitaController = require("./IngredientesReceitaController");

routes.get("/getIngredientesReceita", IngredientesReceitaController.getIngredientesReceita);
routes.get("/getIngredientesReceita/:id", IngredientesReceitaController.getIngredientesReceitaById);
routes.put("/putIngredientesReceita/:id", IngredientesReceitaController.updateIngredientesReceita);
routes.post("/removeIngredientesReceitaByPK", IngredientesReceitaController.removeIngredientesReceitaByPK);
routes.post("/addIngredientesReceita", IngredientesReceitaController.insertIngredientesReceita);

module.exports = routes;
