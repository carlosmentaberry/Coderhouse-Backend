const express = require("express");

const app = express();
app.use(express.json());
const mascotasRoute = require("./routes/mascotas.js");
const personasRoute = require("./routes/personas.js");

app.use("/mascotas", mascotasRoute);
app.use("/personas", personasRoute);

app.listen(8080, () =>{
    console.log("app running on port 8080");
})