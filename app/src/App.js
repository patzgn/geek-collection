import { createTheme, ThemeProvider } from '@mui/material/styles'
import Header from './components/Header';
import Hero from './components/Hero';

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
    </ThemeProvider>
  );
}

export default App;
