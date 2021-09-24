const express = require("express");

const app = express();
const productosRoute = require("./routes/productos");
const categoriasRoute = require("./routes/categorias");

const arr = require("./arr");

app.use("/products", productosRoute);
app.use("/categories", categoriasRoute);

app.listen(8080, () =>{
console.log("app running on port 8080");
})