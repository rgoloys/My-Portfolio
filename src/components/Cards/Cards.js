import React from 'react';
import './Cards.css';
import styled from 'styled-components';

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
  font-size: 1.5rem;
  margin: 0 0 10px;
  // color: #333;
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
  return (
    // <div className="card">
    //   <img src={image} alt={title} className="card-image" />
    //   <div className="card-content">
    //     <h2 className="card-title">{title}</h2>
       
    //   </div>
    // </div>

    <CardWrapper>
      <a href={link} target="_blank" rel="noopener noreferrer" className='hyperlink'>
        <CardImage src={image} alt={title} />
        <IconContainer>
          {icons && icons.map((icon, index) => (
            <Icon key={index} src={icon} alt={`Icon ${index}`} />
          ))}
        </IconContainer>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}

        </CardContent>
      </a>
    </CardWrapper>
  );
};

export default Card;
/* <p className="card-description">{description}</p> */