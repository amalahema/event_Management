const { User,Events} = require('../models');

const resolvers = {
    Query: {
        viewEvents: async () => {
            return await Events.find();
        }
    }, 
    Mutation: {
        addEvent: async (_, args) => {
            const event = await Events.create(args);
            return event;
        }
    }
};

module.exports = resolvers;