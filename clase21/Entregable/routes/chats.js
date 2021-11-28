const express = require("express");
const Container = require("../daos/ChatDaoFirebase");
const { normalize, schema, denormalize } = require("normalizr");

const app = express();
const { Router } = express;
const router = new Router();

let chat = new Container;

router.get("/", (req, res) => {
  async function getChats(){
    try{
      let aux = await chat.getAll();

      const schemaAutor = new schema.Entity('author');
      const mySchema = new schema.Array({
        author: schemaAutor
      });

      const normalizedChat = normalize(aux[0].chats, mySchema);

      const denormalizeChat = denormalize(normalizedChat.result, mySchema, normalizedChat.entities);

      res.send({normalizr: normalizedChat});

    }
    catch(error){
      throw Error("router.get() " + error);
    }  
  }    
  getChats();
});

router.post("/", (req, res) => {

  async function saveChat(){
    try {
      let aux = await chat.getAll();
      aux[0].chats.push(req.body);
      await chat.update(aux[0])
      res.send('chat agregado ok');
    } catch (error) {
      throw Error("router.post " + error);
    }
  }
  saveChat();
});

module.exports = router;
