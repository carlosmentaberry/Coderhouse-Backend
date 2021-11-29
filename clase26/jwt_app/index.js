const express = require("express");
const jwt = require("jsonwebtoken");
const arr = require("../../clase25/authorization/data");
const PRIVATE_KEY = "misecreto";

const app = express();


/****************funciones o middlewares ******************/
app.use(express.json());
const generateToken = (user) => {
    const token = jwt.sign({
        data: user
    },
        PRIVATE_KEY,
        { expiresIn: "1h" });
    return token;
}
console.log(generateToken({ id: 1, username: "charly", password: "123456" }))

const verificateToken = (req, res, next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.json({message:"No autorizado"});
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, PRIVATE_KEY, (err, decoded) =>{
        if(err){
            return res.json({message:"No autorizado"});
        }
        req.user = decoded.data;
    })

    next();
}
/****************funciones o middlewares ******************/

/****************ROUTES ******************/
app.get("/", (req, res) => {
    res.json({ data: arr });
    // res.send("express funciona");
});

app.post("/login", (req, res) => {
    // res.send("express funciona");
    let { username, password } = req.body;
    let user = arr.find(x => {
        return x.username === username;
    });
    if (user) {
        const access_token = generateToken(user);
        return res.json({ message: "usuario logueado", token: access_token });
    }

    res.json({ message: "usuario o contraseña invalidos" });
});

app.post("/register", (req, res) => {
    //res.send("express funciona");
    let { username, password } = req.body;
    let user = arr.find(x => {
        return x.username === username;
    })

    if (user) return res.json({ mensaje: "el usuario ya existe" });

    let userNew = {
        id: Math.random(),
        username: username,
        password: password
    }
    arr.push(userNew);
    return res.json({ mensaje: "Usuario registrado ok" });
});

app.get("/profile", verificateToken, (req, res) => {
    res.send("Ruta privada");
})
/****************ROUTES ******************/



app.listen(8080, () => {
    console.log("app running on port 8080");
});