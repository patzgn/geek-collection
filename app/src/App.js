import { createTheme, ThemeProvider } from '@mui/material/styles'
import Header from './components/Header';
import Hero from './components/Hero';
import GameStack from './components/GameStack'

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
      <Hero auth={auth} />
      <GameStack />
    </ThemeProvider>
  );
}

export default App;
