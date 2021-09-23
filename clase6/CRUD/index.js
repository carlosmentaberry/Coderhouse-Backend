const express = require("express");

const app = express();

const arr = require("./arr");

const frase = "Hola mundo como estan";

// GET

app.get("/api/frase", (req, res) =>
{
    res.json(frase);
});

app.get("/api/letras/:num", (req, res) =>
{
    res.json(frase.slice(req.params.num-1, req.params.num));
});

app.get("/api/palabra/:num", (req, res) =>
{
    res.json(frase.split(' ')[req.params.num-1]);
});

app.get("/api/:id", (req, res) =>
{
    let cod = req.params.id;
    res.json({message: "ok", data: arr.filter(x => x.id == parseInt(cod))});
});

app.get("/search", (req, res) =>
{
    console.log(req.query);
    res.json({message: "ok", data: arr.filter(x => x.fistname == req.query.firstname)});
});

// POST

// PUT

// DELETE


app.listen(8080, () =>{
console.log("app running on port 8080");
})