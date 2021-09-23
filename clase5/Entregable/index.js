const express = require("express");
const path = require("path");

const Cont = require("./EntregableAnterior");

const app = express();
let cont = new Cont("productos.txt");

app.get("/productos", (req, res) =>{
    res.send(cont.getAll());
});

app.get("/productosRandom", (req, res) =>{
    res.send(cont.getRandom());
});

app.listen(8080, () => {
    console.log("server running on port 8080")
});