import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose'

const uuid = uuidv4()
const Schema = mongoose.Schema;

const firstSchema = new Schema({
    name: String,
    password: String,
    userId: {
        type: String,
        default: uuidv4()
    },
    userName: String,
    date: {
        type: Date,
        default: Date.now,
      }
})

// const firstSchema = mongoose.Schema({
//     _id: Number,
//     name: String,
//     password: String
// })

export default mongoose.model('newUser', firstSchema)