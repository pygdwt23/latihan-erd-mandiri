const express = require("express");
const app = express();

const routeMahasiswa = require("./Router/mahasiswa");
const routeBooks = require("./Router/buku");
const routePinjam = require("./Router/pinjambuku");

app.use(express.json());

app.use(routeMahasiswa);
app.use(routeBooks);
app.use(routePinjam);

app.listen(2077, () => {
  console.log("Server is ON!");
});
