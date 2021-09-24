const express = require("express");

const { Router } = express;
const router = new Router();

router.get("/", (req, res) =>
{
    res.json({message: "ok", data: req.body});
});

router.post("/test", (req, res) =>
{
    res.json({message: "ok", data: req.body});
});

module.exports = router;