const express =require('express')
const graphqlHTTP = require('express-graphql')
const server = express()

server.use('/graphql', graphqlHTTP({
  
}))

port = 4000
server.listen(port, () => {
  console.log(`\n API running on port ${port} \n`)
});
