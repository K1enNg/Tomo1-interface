import { BrowserRouter, useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import muiTheme from './theme/muiTheme';
import './styles/animations.css';
import { routes } from './routes';

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
