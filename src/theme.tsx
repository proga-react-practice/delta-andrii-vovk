import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Comic Sans MS, sans-serif',
  },
  palette: {
    primary: {
      main: '#525252',
      light: '#555'
    },
    secondary: {
      main: '#f5f5f5',
      dark: '#ffffff',
      light: '#000000',
    },
    background: {
      default: '#f8f9fa',
    },
    error: {
      main: '#c84238',
      light: '#dc3545',
      dark: '#9a000f'
    },
    success: {
      main: '#28a745',
      light: '#34d058',
      dark: '#22863a'
    },
    info: {
      main: '#17a2b8',
      light: '#007bff',
      dark: '#003d7f'
    },
  }
});

export default theme;