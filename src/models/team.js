import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: true,
    }
})

export default mongoose.model('Team', Schema)