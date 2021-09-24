const express = require("express");

const { Router } = express;
const router = new Router();

let personas = [
    {
        nombre: "Carlos", apellido: "Mentaberry", edad: 32
    },
    {
        nombre: "Juan", apellido: "Perez", edad: 20
    }
]

router.get("/", (req, res) =>
{
    res.json({message: "ok", data: personas});
});

router.post("/", (req, res) =>
{
    personas.push(req.body);
    res.json({message: "ok", data: personas});
});


module.exports = router;