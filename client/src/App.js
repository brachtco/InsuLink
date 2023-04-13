import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import LandingPage from './pages/LandingPage';
import HomeTest from './pages/HomeTest';
import UserProfile from './pages/UserProfile';
import Footer from "./components/Footer";
import Container from '@mui/material/Container';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
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
          <Route
            path="/Login"
            element={<Login />} 
          />
          <Route
          Path="/Signup"
          element={<Signup/> }
          />                 
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
