import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Header from "./components/Header";
import LandingPage from './pages/LandingPage';
import UserProfile from './pages/UserProfile';
import Footer from "./components/Footer";
import Container from '@mui/material/Container';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SelectedStudent from "./pages/SelectedStudent";
import HomePage from "./pages/HomePage";
import WesternSchools from './pages/WesternSchools';
import EasternSchools from './pages/EasternSchools';
import SelectedSchool from './pages/SelectedSchool';

//add components as they are finished here:

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Header />
      <Container maxWidth='false' style={{ height: "100vh", position: "relative" }} >
        <Container style={{ paddingBottom: '5rem', minHeight: '100%'}}>
        <Routes>
          <Route
            path="/"
            element={<LandingPage />}
          />
          <Route
            path="/HomePage"
            element={<HomePage />}
          />
          <Route
            path="/UserProfile"
            element={<UserProfile />}
          />
          <Route
            path="/SelectedStudent"
            element={<SelectedStudent />}
          />
          <Route
            path="/WesternSchools"
            element={<WesternSchools />}
          />
          <Route
            path="/EasternSchools"
            element={<EasternSchools />}
          />
          <Route
            path="/SelectedSchool"
            element={<SelectedSchool />}
          />
          <Route
            path="/Login"
            element={<Login />} 
          />
          <Route
          path="/Signup"
          element={<Signup />}
          />                 
        </Routes>
        </Container>
        <Footer style={{width: '100%', position: 'absolute' }}/>
      </Container>
    </Router>
    </ApolloProvider>
  );
}

export default App;
