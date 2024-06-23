import React from 'react';
import './Cards.css';
import styled, { css } from 'styled-components';
import { useTheme } from 'styled-components';
import { lightTheme, darkTheme } from '../theme/theme';

const CardWrapper = styled.div`
  max-width: 300px;
  margin: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
  padding: 2%;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  ${({ theme }) => {
    const color = theme; 
    if(theme === 'light'){
      theme = lightTheme.color
    }else{
      theme = darkTheme.color
    }
    return css`
      color: ${color};
      font-size: 1.5rem;
      margin: 0 0 10px;
    &:hover{
      color: ${color === lightTheme.color ? 'blue' : 'blue'};

    }
    `;
  }}
`;

const CardDescription = styled.p`
  color: #666;
  font-size: 14px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin:8px;
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

const Card = ({ title, description, image, link, icons }) => {
  const theme = useTheme();

  return (
    <CardWrapper>
      <a href={link} target="_blank" rel="noopener noreferrer" className='hyperlink'>
        <CardImage src={image} alt={title} />
        <IconContainer>
          {icons && icons.map((icon, index) => (
            <Icon key={index} src={icon} alt={`Icon ${index}`} />
          ))}
        </IconContainer>
        <CardContent>
          <CardTitle theme={theme}>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}

        </CardContent>
      </a>
    </CardWrapper>
  );
};

export default Card;
/* <p className="card-description">{description}</p> */