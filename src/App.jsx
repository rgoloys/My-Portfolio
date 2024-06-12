import './App.css';
import Header from './components/Header/Header';
import Index from './components/Index/Index';
import CardContainer from './components/Cards/CardContainer';

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/theme/theme';
import ThemeToggle from './components/theme/ThemeToggle';


const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  transition: all 0.3s ease;
`;

function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? darkTheme : lightTheme}>
      <AppContainer>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme}/>
        <Header />
        <Index />
        <CardContainer />
      </AppContainer>    
    </ThemeProvider>

  );
}

export default App;
