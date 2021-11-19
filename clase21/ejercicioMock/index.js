const express = require("express");
const faker = require("faker");
const app = express();

app.get("/api/productos-test", (req,res)=>{
    let array = [];
    for(i = 0; i<= 5; i++){
        array.push({
            name: faker.commerce.product(),
            price: faker.commerce.price(),
            picture: faker.image.image()
        });
    }

    res.send({data:array});
})

app.get("/", (req,res)=>{
    // conectarme a la base
    // traer los usuarios
    // filtrar los elementos
    // data cliente
    res.send("test");
})


app.listen(8080, () => {
    console.log("app running on port 8080");
});