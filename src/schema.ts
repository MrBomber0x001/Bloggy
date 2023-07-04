import { gql } from "apollo-server";

export const typeDefs = gql`
    type Query {
        articles: [Article!]!
    }

    type Mutation {
        articleCreate(article: ArticleInput!): ArticlePayload!
        articleUpdate(articleId: ID!, article: ArticleInput!): ArticlePayload!
    }

    input ArticleInput {
        title: String
        content: String
    }

    type Article {
        id: ID!
        title: String!
        content: String!
        createdAt: String!
        published: Boolean!
        user: User!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        profile: Profile!
        articles: [Article!]!
    }
    
    type Profile {
        id: ID!
        bio: String!
        user: User!
    }

    type UserError {
        message: String!
    }
    type ArticlePayload {
        userErrors: [UserError!]!
        article: Article
    }
`