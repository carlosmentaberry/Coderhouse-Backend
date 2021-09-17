const http = require("http");

const server = http.createServer((req, res) => {
    res.end("hola mundo con http node")
});


const portListen = server.listen(5000, () =>{
    console.log("server running on port 5000");
});