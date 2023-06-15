// const express = require("express");
// const models = require("./models");


// // Apollo-server-express (deprecates in Oct 2023 to @apollo/server)
// const { ApolloServer } = require('apollo-server-express');
// const db = require("./config/connection");
// const app = express();

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () =>
// {
//     console.log("Server is running on PORT 3001!");
// })
const express = require("express");
const path = require("path");
// Apollo-server-express (deprecates in Oct 2023 to @apollo/server. Keep in mind!)
const { ApolloServer } = require('apollo-server-express');

const { typeDefs, resolvers } = require('./schemas');
const models = require("./models");
// mongoose connector
const db = require("./config/connection");
// PORT
const PORT = process.env.PORT || 3001;

// Instantiate new Apolloserver
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

// Express
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

if(process.env.NODE_ENV === 'production') {
    // To READ the react content when it is deployed in the internet
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Start Apolloserver, then connect to express, connect to mongoose, THEN start the app
const startApolloServer = async () => {
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    db.once('open', () => {
        app.listen(PORT, () => {
            console.log("Server running on PORT 3001!");
        })
    })
}

startApolloServer();