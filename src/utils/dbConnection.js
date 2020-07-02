import mongoose from 'mongoose'

function dbConnection() {
    mongoose.connect('mongodb+srv://nfl:nfl@cluster0-qqsuz.mongodb.net/nfl?retryWrites=true&w=majority', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, () => console.log('Connected to MongoDB Atlas'))
}

export default dbConnection