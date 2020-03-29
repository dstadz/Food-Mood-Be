const graphql = require('graphql')
const _ = require('lodash') 

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
} = graphql

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID},
    name: { type: GraphQLString},
    genre: { type: GraphQLString},
  })
})

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID},
    name: { type: GraphQLString},
    age: { type: GraphQLInt },
    })
  })

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args:{id:{type: GraphQLID}},
      resolve(parent, args){
        //code to get data from db or other
        return _.find(book, {id:args.GraphQLID})
      }
    },
    author: {
      type: AuthorType,
      args:{id:{type: GraphQLID}},
      resolve(parent, args){
        return _.find(authors, { i: args.id })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})