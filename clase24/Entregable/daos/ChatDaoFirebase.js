const FirebaseContainer = require("../containers/FirebaseContainer")

class ChatDaoFirebase extends FirebaseContainer {

    constructor() {
        super('chats')
    }
}

module.exports = ChatDaoFirebase;
