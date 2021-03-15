import userEvent from '@testing-library/user-event';
import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'

import NewUser from './schemas/firstSchema.js';


// App Config
const app = express();
const port = process.env.PORT || 8001;
const connectionUrl = 'mongodb://localhost:27017/test'

// Middlewares
app.use(express.json())
app.use(Cors());


// DB Config
mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API Endpoints
app.get('/', (req, res) => {
    res.status(200).send('Send')

})

app.post('/addNewUser', (req, res) => {
    const newUsers = req.body;

    NewUser.create(newUsers, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/addNewUser', (req, res) => {
    NewUser.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));