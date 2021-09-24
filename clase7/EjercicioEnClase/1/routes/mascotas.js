const express = require("express");

const { Router } = express;
const router = new Router();

let mascotas = [
    {
        nombre: "ona", raza: "pepe", edad: 6
    },
    {
        nombre: "india", raza: "blanca", edad: 1
    }
]

router.get("/", (req, res) =>
{
    res.json({message: "ok", data: mascotas});
});

router.post("/", (req, res) =>
{
    mascotas.push(req.body);
    res.json({message: "ok", data: mascotas});
});


module.exports = router;