import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import LandingPage from './pages/LandingPage';
import HomeTest from './pages/HomeTest';
import UserProfile from './pages/UserProfile';
import Footer from "./components/Footer";
import Container from '@mui/material/Container';
//add components as they are finished here:

function App() {
  return (
    <Router>
      <Container style={{ height: "100vh", position: "relative" }} >
        <Header />
        <Routes>
          <Route
            path="/"
            element={<LandingPage />}
          />
          <Route
            path="/HomeTest"
            element={<HomeTest />}
          />
          <Route
            path="/UserProfile"
            element={<UserProfile />}
          />                 
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
