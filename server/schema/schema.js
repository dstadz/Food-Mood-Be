const graphql = require('graphql')
const _ = require('lodash')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID},
    name: { type: GraphQLString},
    genre: { type: GraphQLString},
    author:{
      type: AuthorType,
      resolve(parent, args){
        return _.filter(bokks, { authorid: parent.id })
      }
    }
  })
})

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID},
    name: { type: GraphQLString},
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args){
        return _.find(authors, { id: args.id })
      }
    }
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
        return _.find(author, {id:parent.authorID})
      }
    },
    author: {
      type: AuthorType,
      args:{id:{type: GraphQLID}},
      resolve(parent, args){
        return _.find(authors, { id: args.id })
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parents, args) {
        return books
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parents, args) {
        return authors
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})