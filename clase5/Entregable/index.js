const express = require("express");
const path = require("path");

const Cont = require("./EntregableAnterior");

const app = express();
let cont = new Cont("productos.txt");

app.get("/productos", async (req, res) =>{
    res.send(await cont.readAll());
});

app.get("/productosRandom", async (req, res) =>{
    res.send(await cont.getRandom());
});

app.listen(8080, () => {
    console.log("server running on port 8080")
});