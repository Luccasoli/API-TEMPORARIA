const routes = require("express").Router();
const AutorController = require("./AutorController");

routes.get("/getAutores", AutorController.getAutores);
routes.get("/getAutor/:id", AutorController.getAutorById);
routes.put("/putAutor/:id", AutorController.updateAutor);
routes.post("/removeAutor/:id", AutorController.removeAutorById);
routes.post("/addAutor", AutorController.insertAutor);

module.exports = routes;
