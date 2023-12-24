// The GraphQL schema
export const typeDefs = `#graphql
  type Card {
    id: ID!
    number: Int!
    cvv: Int!
    expirity: String!
    money: Int!
  }

  type Client {
    id: ID!
    name: String!
    email: String!
    cards: [Card!]!
    travels: [Travel!]!
  }

  type Driver {
    id: ID!
    name: String!
    email: String!
    username: String!
    travels: [Travel!]!
  }

  type Travel {
    id: ID!
    client: ID!
    driver: ID!
    money: Int!
    distance: Int!
    date: Date!
    status: String!
  }
`;