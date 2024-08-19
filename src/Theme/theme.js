import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', 
      second: '#effbff',
      third: '#082e53'
    },
    secondary: {
      main: '#00a8ea',
      second: '#e4f8ff',
      third: '#082e53'
    },
    customColors: {
      shadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
      lightgrey: '#777',
      white: '#fff',
      black: '#000'
    },
  },
  typography: {
    fontFamily: '"Nunito", sans-serif',
  },
});

export default theme;
