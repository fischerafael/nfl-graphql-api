import { ApolloServer } from 'apollo-server'
import dbConnection from './dbConnection'

function startServer ({ typeDefs, resolvers }) {
    dbConnection()
    const server = new ApolloServer({ typeDefs, resolvers })
    server.listen(3333, () => console.log('Server running on port 3333'))
}

export default startServer