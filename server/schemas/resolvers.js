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
        },
        updateEvent: async (parent, args) =>
         {
            try {
              const { eventId, eventName, eventDescription, eventDate, eventTime, location } = args;
              const updatedEvent = await Events.findByIdAndUpdate(eventId, {
                eventName,
                eventDescription,
                eventDate,
                eventTime,
                location
              }, { new: true });
      
              return updatedEvent;
            } catch (error) {
              // Handle any errors
              throw new Error('Failed to update the event.');
            }
          }
        }
    };


module.exports = resolvers;