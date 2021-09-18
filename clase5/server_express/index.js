const express = require("express");
const path = require("path");
const moment = require("moment");

const app = express();

let visitas = 0;
app.get("/visitas", (req, res) =>{
    visitas+=1;
    res.send(`<h1>La cantidad de visitas es: ${visitas}</h1>`);
})
app.get("/", (req, res) =>{
    res.send(`<h1 style="color:blue">Bienvenidos al servidor express</h1>`);
})
app.get("/fyh", (req, res) =>{
    let time = moment().format("DD/M/YYYY HH:MM:SS");
    console.log(time);
    let fecha = {
        fecha: time
    }
    res.send(fecha);
})

app.listen(8080, () => {
    console.log("server running on port 8080")
})