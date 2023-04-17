const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type School {
    _id: ID
    name: String
    image: String
    region: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    age: Int
    gender: String
    bio: String
    interests: String
    hometown: String
    email: String
    password: String
    school: [School]
    photo: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(email: String!): User
    users: [User]
    school(_id: ID!): School
    schools: [School]
    me: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth

    updateUser(
      firstName: String
      lastName: String
      age: Int
      gender: String
      bio: String
      interests: String
      hometown: String  
      email: String
      password: String
    ): User
    
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;