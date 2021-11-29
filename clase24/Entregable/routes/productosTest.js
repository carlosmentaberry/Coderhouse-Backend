const express = require("express");
const faker = require("faker");

const app = express();
const { Router } = express;
const router = new Router();

router.get("/", (req, res) => {
    let array = [];
    for (i = 0; i < 5; i++) {
        array.push({
            name: faker.commerce.product(),
            price: faker.commerce.price(),
            picture: faker.image.image()
        });
    }
    res.send(array);
})

module.exports = router;