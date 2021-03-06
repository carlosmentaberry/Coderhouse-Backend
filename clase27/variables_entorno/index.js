const express = require("express");
const dotenv = require("dotenv").config();
const app = express();


app.listen(process.env.PORT, () => {
    console.log(`app running on ${process.env.HOST}:${process.env.PORT}`);
});