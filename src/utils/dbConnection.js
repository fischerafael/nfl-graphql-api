import mongoose from 'mongoose'
require('dotenv').config()

function dbConnection() {
    mongoose.connect(process.env.DB_CONNECTION, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, () => console.log('Connected to MongoDB Atlas'))
}

export default dbConnection