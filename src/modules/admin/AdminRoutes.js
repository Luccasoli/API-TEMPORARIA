const routes = require("express").Router();
const AdminController = require("./AdminController");

routes.get("/getAdmins", AdminController.getAdmins);
routes.get("/getAdmin/:id", AdminController.getAdminById);
routes.put("/putAdmin/:id", AdminController.updateAdmin);
routes.post("/removeAdmin/:id", AdminController.removeAdminById);
routes.post("/addAdmin", AdminController.insertAdmin);

module.exports = routes;
