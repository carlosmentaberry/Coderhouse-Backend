const express = require("express");
const app = express();
const handlebars = require("express-handlebars");


app.set("views", __dirname + "/views");
app.set("view engine", "hbs");


app.engine(
    "hbs", handlebars({
        layoutsDir: __dirname + "/views/layouts",
        defaultLayout: "main",
    }));
app.get("/", (req, res) => {
    res.render("home", { layout: "main" });
});

app.listen(8080, () => {
    console.log("app running on port 8080");
});