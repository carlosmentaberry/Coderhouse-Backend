const express = require("express");

const router = express.Router();
const { userAll } = require("../services/userService")

router.get("/", async (req, res) => {
    let response = await userAll();
    res.json({data: response});
});

module.exports = router;