const express = require("express");
const twilio = require("twilio");

const app = express();
const PORT = process.env.PORT || 8080;

const accountid = "asdfqrwe";
const authToken = "asdfqrwe";

const client = twilio(accountid, authToken);

app.post("/twilio", async (req, res) => {
    try{
        const message = await client.messages.create({
            body:"hola test twilio desde nodejs",
            from:"nrodetwilio-phonenumber",
            to:"+5491136699432"
        })
        console.log(message);
        res.send("txt enviado");
    }catch(error){
        console.log(error);
    }
});

app.listen(PORT, () => {
    console.log(`app running on port ${PORT} process: ${process.pid}`);
});
