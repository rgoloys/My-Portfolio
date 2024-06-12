// src/CardContainer.js
import React from 'react';
import Card from './Cards';
import styled from 'styled-components';
import Agromart from '../../Static/Agromart.png'
import InternImage from '../../Static/Intern.png'
import Ionic from '../../Static/Ionic.png'
import BMI from '../../Static/BMI.png'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  margin-top: 50px;
`;
const MainContainer = styled.div`
  width:100%;
  margin-top: 100px;
`;
const HeadLine = styled.div`
  font-size: 35px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: 'MyFont2', 'Courier New';
`;
const CardContainer = () => {
  const cards = [
    {
      title: 'Words Weighted Score Internshipt System',
      /*description: '"Words Weighted Score" A web based system applying a natural language toolkit libraries for word score tokenizing and sentiment paragraph analysis.',*/
      image: InternImage,
    },
    {
      title: 'AGROMART: A web based system for agricultural market',
      /*description: 'E-commerce website that pormote the goods and services of our agricultural sector.',*/
      image: Agromart,
    },
    {
      title: 'Ionic-Angular UI Components Manipulation.',
     /* description: 'Manipulating ionic UI components.',*/
      image: Ionic,
    },
    {
      title: 'BMI Automated Calculation',
     /*description: 'C# projects using object-oriented programming.',*/
      image: BMI,
    }
  ];

  return (
    <MainContainer>
      <HeadLine>
        Recent Projects
      </HeadLine>
      <Container>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
      ))}
      </Container>
    </MainContainer>
  );
};

export default CardContainer;
