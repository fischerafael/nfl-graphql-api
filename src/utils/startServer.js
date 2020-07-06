import { ApolloServer } from 'apollo-server'
import dbConnection from './dbConnection'
require('dotenv').config()

function startServer ({ typeDefs, resolvers }) {
    dbConnection(process.env.DB_CONNECTION)
    const server = new ApolloServer({ typeDefs, resolvers,
        context: ({ req }) => {
            const authorization = req.headers.authorization            
            return { authorization }
        }
    })
    server.listen(3333, () => console.log('Server running on port 3333'))
}

export default startServer