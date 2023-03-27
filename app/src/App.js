import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import GamePage from './pages/GamePage';
import Games from './pages/Games';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

const theme = createTheme({
  palette: {
    primary: {
      light: '#0B3B55',
      main: '#0B3B55',
      dark: '#0B3B55',
    },
  },
});

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {

  const token = getToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  const auth = false;

  return (
    <ThemeProvider theme={theme}>
      <Header auth={auth} />

      <Routes>
        <Route path='/' element={<Home auth={auth} />} />
        <Route path='games' element={<Games />} />
        <Route path='games/:id' element={<GamePage auth={auth} />} />
        <Route path='login' element={<Login setToken={setToken} />} />
        <Route path='users/:username' element={<Profile />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
