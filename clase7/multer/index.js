const express = require("express");
const multer = require("multer");

const app = express();

let storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, "./uploads")
    },
    filename:function(req, file, cb){
        cb(null, "_test_" + file.originalname)
    },
});

let upload = multer({storage});

app.post("/", upload.single("myfile"), (req, res) =>{
    
    let file = req.file;
    if(!file){
        res.send("no guardado")
        return;
    }
    res.send("guardado ok")
})

app.listen(8080, () =>{
console.log("app running on port 8080");
});