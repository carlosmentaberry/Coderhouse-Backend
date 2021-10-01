const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/static", express.static(__dirname + "/public"));

const productosRoute = require("./routes/productos");

app.use("/api", productosRoute);

app.listen(8080, () =>{
console.log("app running on port 8080");
})