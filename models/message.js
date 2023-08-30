const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    messageContent: {
        type: String,
        required: true
    },
    timeStamp: {
        type: String
        
    }



})

module.exports = mongoose.model('messageContent', messageSchema)