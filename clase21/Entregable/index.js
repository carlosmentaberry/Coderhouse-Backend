const express = require("express");

const app = express();

app.get("/api/productos-test", (req,res)=>{
    res.send("");
})


server.listen(8080, () => {
    console.log("app running on port 8080");
});