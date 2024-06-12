// src/ThemeToggle.js
import React from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5em;
  color: ${({ theme }) => theme.color};
  position: absolute;
  top: 20px;
  right: 20px;
`;

const ThemeToggle = ({ theme, toggleTheme }) => {


    return (
        <ToggleButton onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
        </ToggleButton>
    );
};

export default ThemeToggle;
