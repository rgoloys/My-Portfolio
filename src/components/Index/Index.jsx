import React from 'react';
import './Index.css';
import Avatar from '../../Static/Avatar.png';
import styled, { css } from 'styled-components';
import { useTheme } from 'styled-components';
import { lightTheme, darkTheme } from '../theme/theme';
import Resume from './resume';

const Avatars = styled.img`
  ${({ theme }) => {
    const shadowColor = theme === 'light' ? lightTheme.background : darkTheme.background;
    return css`
      filter: drop-shadow(1px 1px 10px ${shadowColor});
    `;
  }}
`;

const Index = () => {
  const theme = useTheme();

  return (
    <div id='Container'>
      <div className="Quote">
        <h2>
          Rolando A. Goloya Jr. <br />
          <span className='position'>WEB DEVELOPER</span>
          <br />
          <span>
            <p>Dedicated and Passionate web developer. Eager to learn new technologies and apply ideas into real life project.</p>
          </span>
        </h2>
        <Resume />
      </div>
      <div className="Avatar">
        <Avatars src={Avatar} alt="Avatar" />
      </div>
    </div>
  );
};

export default Index;
