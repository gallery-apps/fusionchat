

const express = require('express')
const app = express()

app.use(express.json())

const mongoose = require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/whats-app')

const db = mongoose.connection

// const db = async () => {
//     try{
//         mongoose.set('strictQuery', false)
//         const conn = await mongoose.connect(process.env.MONGODB_URI);
//         console.log(`Database Connected: $(conn.connection.host)`)
//         console.log('yuuuh')
//     }
//     catch(error) {
//         console.log(error)
//     }



// }


db.on('error', (error) => console.log('error'))
db.once('open', () => console.log('Connected to Database'))

const Message = require('../models/message')
const User = require('../models/user');

app.get('/', (req, res) =>{
    res.send("Hello world")
})

app.get('/messages/:senderId/:recipientId', async (req, res) => {
    const { senderId, recipientId } = req.params;

    try {
        const messages = await Message.find({
            $or: [
                { sender: senderId, recipient: recipientId },
                { sender: recipientId, recipient: senderId }
            ]
        })

        res.status(200).send(messages);
    } catch (error) {
        res.status(500).send('An error occurred');
    }
});

app.post('/messages', async (req, res) => {
    const { senderId, recipientId, messageContent } = req.body;

    try {
        const newMessage = await Message.create({
            sender: senderId,
            recipient: recipientId,
            messageContent
        });

        res.status(201).send(newMessage);
    } catch (error) {
        res.status(500).send('An error occurred');
    }
});

app.post('/users', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const newUser = await User.create({ username, email, password });
        res.status(201).send(newUser);
    } catch (error) {
    
        res.status(500).send('An error occurred');
    }
});
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
       
        res.status(500).send('An error occurred');
    }
});

app.get('/users/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await User.findById(userId);
        if (!user) {
            res.status(404).send('User not found');
        } else {
            res.status(200).send(user);
        }
    } catch (error) {
        
        res.status(500).send('An error occurred');
    }
});

app.listen(3000, () => console.log('Server Started') )