const routes = require("express").Router();
const ReceitaController = require("./ReceitaController");

routes.get("/getReceitas", ReceitaController.getReceitas);
routes.get("/getReceita/:id", ReceitaController.getReceitaById);
routes.put("/putReceita/:id", ReceitaController.updateReceita);
routes.post("/removeReceita/:id", ReceitaController.removeReceitaById);
routes.post("/addReceita", ReceitaController.insertReceita);

routes.get("/getReceitasByIngrediente/:id", ReceitaController.getReceitasByIngrediente);
routes.get("/getReceitasByAutor/:id", ReceitaController.getReceitasByAutor);
routes.get("/getReceitasByPrato/:id", ReceitaController.getReceitasByPrato);

module.exports = routes;
