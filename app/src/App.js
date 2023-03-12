import { createTheme, ThemeProvider } from '@mui/material/styles'

import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Games from './pages/Games';
import Home from './pages/Home';

const theme = createTheme({
  palette: {
    primary: {
      light: '#0B3B55',
      main: '#0B3B55',
      dark: '#0B3B55',
    },
  },
});

function App() {

  const auth = true;

  return (
    <ThemeProvider theme={theme}>
      <Header auth={auth} />

      <Routes>
        <Route path='/' element={<Home auth={auth} />} />
        <Route path='games' element={<Games />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
