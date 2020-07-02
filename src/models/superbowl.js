import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    year: {
        type: Number,
        required: true,
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: true,
    }   
})

export default mongoose.model('Superbowl', Schema)