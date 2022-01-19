const arr = require("../models/data")

const userAll = () => {
    let users = arr;
    if (users) {
        return users;
    }else{
        {error: "No data found"}
    }
}

module.exports = {
    userAll
}