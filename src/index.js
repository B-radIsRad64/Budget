import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { BudgetsProvider} from './contexts/bugetsContext'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const Theme = createTheme({
  palette: {
    primary: {
      main: '#2979ff',
    },
    secondary: {
      main: '#43a047',
    },
    warning: {
      main: '#fdd835',
    },
    error: {
      main: '#e53935',
    },
  },
  typography: {
    button: {
      fontSize: '.95rem',
      textTransform: 'none',
    }
  },
})


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <BudgetsProvider>
        <App />
      </BudgetsProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);