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

router.get("/productos/:id", (req, res) =>
{
    res.json(arr.filter(x => x.id == req.params.id));
});

router.put("/productos/:id", (req, res) =>
{
    arr.filter(x => x.id == req.params.id).price = req.body.price;
    arr.filter(x => x.id == req.params.id).title = req.body.title;
    arr.filter(x => x.id == req.params.id).thumbnail = req.body.thumbnail;
    res.json(arr);
});

router.delete("/productos/:id", (req, res) =>
{
    arr.splice(req.params.id, 1);
    res.json(arr);
});

router.get("/productos", (req, res) =>
{
    res.json(arr);
});

router.post("/productos", (req, res) =>
{
    arr.push(req.body);
    res.json(arr);
});

module.exports = router;