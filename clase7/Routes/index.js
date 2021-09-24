const express = require("express");

const app = express();
app.use(express.json);

const arr = require("./arr");

// POST


app.post("/", (req, res) =>
{
    console.log(req.body);
    res.json({message: "ok", data: req.body});
});


app.post("/", (req, res) =>
{
    console.log(req.body);
    res.json({message: "ok", data: req.body});
});

// PUT

// DELETE


app.listen(8080, () =>{
console.log("app running on port 8080");
})