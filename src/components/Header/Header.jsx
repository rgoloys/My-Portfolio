import React from 'react';
import './Header.css'
import styled, { css } from 'styled-components';
import { useTheme } from 'styled-components';
import { lightTheme, darkTheme } from '../theme/theme';

// Change 'navbar' to 'Navbar'
const Navbar = styled.p`
  ${({ theme }) => {
    const color = theme; 
    if(theme === 'light'){
      theme = lightTheme.color
    }else{
      theme = darkTheme.color
    }
    return css`
      color: ${color};
    &:hover{
      color: ${color === lightTheme.color ? 'blue' : 'blue'};

    }
    `;
  }}
`;

const Header = () => {
  const theme = useTheme(); // Use useTheme hook to get the theme

  return (
    <header>
      <nav>
        <ul>
          <li><a href="#about"><Navbar theme={theme}>About</Navbar></a></li>
          <li><a href="#projects"><Navbar theme={theme}>Projects</Navbar></a></li>
          <li><a href="#contact"><Navbar theme={theme}>Contact</Navbar></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
