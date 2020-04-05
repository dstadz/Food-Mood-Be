const express =require('express')
const schema = require('./schema/schema')
const graphqlHTTP = require('express-graphql')
const server = express()

server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

port = 4000
server.listen(port, () => {
  console.log(`\n API running on port ${port} \n`)
});
