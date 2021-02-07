const express = require("express");
const route = express();
let controller = require("./../controller/control");

//Middleware
route.use(express.json());

//GET
route.get("/api/v1/member", controller.getAllMahasiswa);

route.get("/api/v1/member/:id_mhs", controller.getMahasiswaById);

//POST
route.post("/api/v1/member", controller.postNewMahasiswa);

//PUT
route.put("/api/v1/member/:id_mhs", controller.editMahasiswa);

//DELETE
route.delete("/api/v1/member/:id_mhs", controller.deleteMahasiswa);

module.exports = route;
