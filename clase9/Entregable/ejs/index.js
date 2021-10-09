const express = require("express");
const handlebars = require("express-handlebars");
const Contenedor = require('./EntregableAnterior');


const cont = new Contenedor("products.txt");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "index.hbs"
  })
);

app.set("views", "./views");
app.set("view engine", "hbs");

app.post("/productos", (req, res) => {
  cont.save({ id: req.body.id, title: req.body.title, price: req.body.price, thumbnail: req.body.thumbnail });
  res.redirect('/productos')
});

app.get("/productos", async (req, res) => {
  res.render("vista", { products: JSON.parse(await cont.readAll()) });
});

app.listen(8080, () => { console.log("app running on port 8080"); });