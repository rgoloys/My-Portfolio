import React from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from 'styled-components';
import { lightTheme, darkTheme } from '../theme/theme';
import './Footer.css'
import Facebook from '../../Static/links/facebook.png'
import instagram from '../../Static/links/instagram.png'
import linkedin from '../../Static/links/linkedin.png'
import github from '../../Static/links/github.png'



// Change 'navbar' to 'Navbar'
const Paragraph = styled.p`
  ${({ theme }) => {
    const color = theme; 
    if(theme === 'light'){
      theme = lightTheme.color
    }else{
      theme = darkTheme.color
    }
    return css`
      color: ${color};
      font-weight: 600;
      font-size: 18px;
    &:hover{
      color: ${color === lightTheme.color ? 'blue' : 'blue'};

    }
    `;
  }}
`;


const Container = styled.div`
  display:flex;
  justify-content: space-between;
  width: 95%;
  border-top: 2px solid #5D636A;
`;
const Containers = styled.div`
  display:flex;
  justify-content:center;
  width:100%;
  margin-top: 120px;
`;

const Footer = () => {
  const theme = useTheme(); // Use useTheme hook to get the theme

  return (  
    <Containers id='Footer'>     
      <Container>
          <Paragraph theme={theme} className='p'>
              rgoloyajr@gmail.com
          </Paragraph>
          <ul>
              <li><a href='https://www.facebook.com/profile.php?id=100009890326790'><img src={Facebook}></img></a></li>
              <li><a href='https://www.instagram.com/rlnd_glys/'><img src={instagram}></img></a></li>
              <li><a href='https://www.linkedin.com/in/rolando-goloya-b39368223/'><img src={linkedin}></img></a></li>
              <li><a href='https://github.com/rgoloys'><img src={github}></img></a></li>
          </ul>
      </Container>
    </Containers> 
  );
};

export default Footer;
