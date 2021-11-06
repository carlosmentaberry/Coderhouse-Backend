const express = require("express");

const app = express()

let admin = require("firebase-admin")
const {v4:uuid4} = require("uuid")

var serviceAccount = require("./db/ecommerce-nodejs.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "http://ecommerce-nodejs.firebaseio.com"
});

const db = admin.firestore()

const query = db.collection("users")

const saveUser = async () =>{
    let doc = query.doc(`${uuid4()}`)

    await doc.create({name:"Charly", edad:32});
    
}
const getUsers = async () =>{
    const users = (await query.get()).docs
    const response = users.map(doc =>{
        return {
            id:doc.id,
            name:doc.data().name,
            age:doc.data().age,
        }
    })
    console.log(response);
}
const getUserById = async () =>{
    const doc = (await query.doc("55ac2ab1-2cdf-407f-8f22-27811a1f4eeb"))

    const item = (await doc.get()).data()
    console.log(item);
}
getUserById()
app.listen(8080, () => {
console.log("server up")
})