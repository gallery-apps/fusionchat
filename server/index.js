

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

const message = require('../models/message')

app.get('/', (req, res) =>{
    res.send("Hello world")
})
app.post('/messages', (req, res) => {
    const dbMessage = req.body;

    message.create(dbMessage)
    .then(data => {
      res.status(201).send(data);
    })
    .catch(err => {
      // Handle error
    });
  

})

app.listen(3000, () => console.log('Server Started') )