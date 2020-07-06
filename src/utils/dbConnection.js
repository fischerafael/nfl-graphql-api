import mongoose from 'mongoose'

function dbConnection(dbConnectionURI) {
    mongoose.connect(dbConnectionURI, {
        useUnifiedTopology: true,
        useNewUrlParser: true        
    }, () => console.log('Connected to DataBase'))
}

export default dbConnection