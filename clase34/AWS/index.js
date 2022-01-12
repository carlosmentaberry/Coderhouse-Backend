const express = require("express");

const app = express();

const AWS = require("aws-sdk");
const { json } = require("express");
AWS.config.update({ region: "us-west-2" })

const sns = new AWS.SNS();

const SNS_TOPIC_ARN = "arn:aws:sns:us-west-2:818917998042:notificacion";

app.use(express.json());

const PORT = process.env.PORT || 8080;

//ROUTES
app.get("/", (req, res) => {
    res.send("API REST AWS TEST");
});

let arr = [];

app.post("/api/users", (req, res) => {
    let { username, password } = req.body;

    let obj = {
        id: Math.random(),
        username,
        password,
    }

    let user = JSON.stringify(obj);

    arr.push(obj);
    return sns.publish({
        Message: `Test AWS - usuario agregado: ${user}`,
        Subject: "Nuevo usuario",
        TopicArn: SNS_TOPIC_ARN
    }).promise()
        .then(data => {
            console.log("Correo enviado");
            console.log(data);
            const body = {
                operation: "Save",
                message: "Ok",
                item: obj
            }
            res.json(body);
        }).catch(err => {
            console.log(err);
            res.status(500)
        });
});


app.listen(PORT, () => {
    console.log(`app running on port ${PORT} process: ${process.pid}`);
});