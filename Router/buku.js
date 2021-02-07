const express = require("express");
const route = express();
let controller = require("./../controller/control");

//Middleware
route.use(express.json());

//GET
route.get("/api/v1/books", controller.getAllBook);

route.get("/api/v1/books/:id_buku", controller.getBookById);

//POST
route.post("/api/v1/books", controller.postNewBook);

//PUT
route.put("/api/v1/books/:id_buku", controller.editBook);

//DELETE
route.delete("/api/v1/books/:id_buku", controller.deleteBook);

module.exports = route;
