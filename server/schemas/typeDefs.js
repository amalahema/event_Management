const { gql } = require('apollo-server-express');
const Events = require('../models/Events');

const typeDefs = gql`
    type Events {
        _id: ID
        eventName: String
        eventDescription: String
        eventDate: String
        eventTime: String
        location: String
        
    }

    type Query {
        viewEvents: [Events]
    }

    type Mutation {
        addEvent(eventName: String!, eventDescription: String!, eventDate: String!, eventTime: String!, location: String!): Events
        updateEvent(
            eventId: ID!
            eventName: String
            eventDescription: String
            eventDate: String
            eventTime: String
            location: String
        ): Events
        deleteEvent(eventId: ID!): Events
    }
`;

module.exports = typeDefs;