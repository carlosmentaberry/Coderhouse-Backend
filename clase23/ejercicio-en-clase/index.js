const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser("misecreto"));

app.get("/getCookies", (req,res)=>{
    res.cookie("password", "123456", {signed: true});
    res.cookie("user", "Carlos", {maxage: 3000});
    res.send("Cookie creada");
})

app.get("/createCookies", (req,res)=>{
    if(nombre==="Carlos" && password === ""){
        console.log(req.cookies);
        res.send({data: req.signedCookies.user});
    }
})

app.get("/logout", (req,res)=>{
    res.clearCookie("user").clearCookie("password");
    res.send("Cookies eliminadas");
})

app.listen(4002, () => {
console.log("server ok!");
});