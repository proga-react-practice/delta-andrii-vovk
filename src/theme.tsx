import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Comic Sans MS, sans-serif',
  },
  palette: {
    primary: {
      main: '#525252',
    },
    secondary: {
      main: '#525252',
    },
    background: {
      default: '#f8f9fa',
      paper: '#f8f9fa',
    }
  }
});

export default theme;