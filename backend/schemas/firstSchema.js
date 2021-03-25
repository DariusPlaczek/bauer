import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose'


const Schema = mongoose.Schema;


const product = new Schema({
    _id: Number,
    productID: String, 
    customID: Number,
    productName: String,
    count: Number,
    basicPrice: Number,
    cycle: Number
})

const readyCard = new Schema({
    productID: String,
    image: String,
    alt: String,
    name: String,
    zykl: Number,
    count: Number
})

const fields = new Schema({
    id: Number,
    fieldId: Number,
    isAktiv: Boolean,
    isCard: Boolean,
    card: [readyCard]
})


const dates = new Schema({
    day: Number,
    month: Number,
    year: Number
})


const firstSchema = new Schema({
    name: String,
    password: String,
    playerMoney: Number,
    storageSpace: Number,
    gameDate: [dates],
    language: String,
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
        playerWarehouse: [product],
        cityWarehouse: [product]
    },
    tileBoard: [fields]    
})



export default mongoose.model('newUser', firstSchema)