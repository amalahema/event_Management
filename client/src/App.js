import './App.css';
import EventForm from './components/EventForm';
import Events from './components/Events';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
//import Adoption from './components/Adoption';
//import KittyForm from './components/KittyForm';


const client = new ApolloClient({
  //uri: '/graphql',
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className = "text-3xl font-bold underline">
      Data fetched from mongo  database
     
       <Events />
       you can addd new event
       <EventForm />
      </div>
    </ApolloProvider>

  );
}

export default App;