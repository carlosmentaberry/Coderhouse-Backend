const express = require("express");

const app = express();

// middlewares a nivel de aplicacion
app.use(function (req, res, next) {
    console.log("se ejecuto alguna ruta");
    next();
})

app.get("/", (req, res) => {
    res.json({ message: "ok", data: "hola" });
});

app.get("/home", (req, res) => {
    res.json({ message: "ok", data: "hola home" });
});


app.listen(8080, () => {
    console.log("app running on port 8080");
})