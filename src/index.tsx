import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './components/styles/GlobalStyles';
import { myTheme } from './components/styles/Theme.styled';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <ThemeProvider theme={myTheme}>
        <App />
        <GlobalStyles />
    </ThemeProvider>
);

reportWebVitals();
