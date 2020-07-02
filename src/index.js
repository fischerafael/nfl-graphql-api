import startServer from './utils/startServer'
import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'
require('dotenv').config()

startServer({ typeDefs, resolvers })