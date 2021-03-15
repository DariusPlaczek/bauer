import mongoose from 'mongoose'

const firstSchema = mongoose.Schema({
    _id: Number,
    name: String,
    password: String
})

export default mongoose.model('newUser', firstSchema)