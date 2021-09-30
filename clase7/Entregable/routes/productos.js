const express = require("express");

const arr = [
    {
        id: 1,
        price: 1,
        title: "Teclado",
        thumbnail: "teclado.png",
    },
    {
        id: 2,
        price: 1,
        title: "Mouse",
        thumbnail: "mouse.png",
    },
    {
        id: 3,
        price: 1,
        title: "Monitor",
        thumbnail: "monitor.png",
    },
];

const { Router } = express;
const router = new Router();
const Contenedor = require("../EntregableAnterior");

const cont = new Contenedor("products.txt");

router.get("/productos/:id", async (req, res) =>
{
    res.send(await cont.getById(req.params.id));
});

router.put("/productos/:id", async (req, res) =>
{
    res.send(await cont.updateById(req.params.id, req.body));
});

router.delete("/productos/:id", async (req, res) =>
{
    res.send(await cont.deleteById(req.params.id));
});

router.get("/productos", async (req, res) =>
{
    res.send(await cont.readAll());
});

router.post("/productos", async (req, res) =>
{
    res.send(await cont.save(req.body));
});

module.exports = router;