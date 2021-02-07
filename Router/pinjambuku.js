const express = require("express");
const route = express();
let controller = require("./../controller/control");

//Middleware
route.use(express.json());

//GET
route.get("/api/v1/pinjambuku", controller.getAllPinjam);

route.get("/api/v1/pinjambuku/:id_pinjam", controller.getPinjamById);

//POST
route.post("/api/v1/pinjambuku", controller.postNewPinjam);

//PUT
route.put("/api/v1/pinjambuku/:id_pinjam", controller.editPinjam);

//DELETE
route.delete("/api/v1/pinjambuku/:id_pinjam", controller.deletePinjam);

module.exports = route;
