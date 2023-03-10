import { createTheme, ThemeProvider } from '@mui/material/styles'
import Header from './components/Header';
import Hero from './components/Hero';
import GameList from './components/GameList';
import GameStack from './components/GameStack'
import Footer from './components/Footer';

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
      {/* <Hero auth={auth} />
      <GameStack /> */}
      <GameList />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
