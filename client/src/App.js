import './App.css';
import Events from './components/Events';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
//import Adoption from './components/Adoption';
//import KittyForm from './components/KittyForm';


const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className = "text-3xl font-bold underline">
      Data fetched from mongo  database
       <Events />
      </div>
    </ApolloProvider>

  );
}

export default App;