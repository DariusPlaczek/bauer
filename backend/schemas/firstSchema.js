import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose'

const Schema = mongoose.Schema;


const product = new Schema({
    _id: Number,
    name: String,
    count: Number,
    price: Number,
    cycle: Number
})

// const playerWare = new Schema(
//     {
//         id: {
//             type: String,
//             default: "01"
//         },
//         name: {
//             type: String,
//             default: "Gerste"
//         },
//         count: {
//             type: Number,
//             default: 100
//         },
//         cycle: {
//             type: Number,
//             default: 12
//         }
//     }, {
//         id: {
//             type: String,
//             default: "02"
//         },
//         name: {
//             type: String,
//             default: "Roggen"
//         },
//         count: {
//             type: Number,
//             default: 80
//         },
//         cycle: {
//             type: Number,
//             default: 14
//         }
//     }
// )

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
        default: Date.now
      },
    warehouse: {
        playerWarehouse: [product]
    }
    
})



export default mongoose.model('newUser', firstSchema)