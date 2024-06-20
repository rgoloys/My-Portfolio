import React from 'react';
import Card from './Cards';
import styled from 'styled-components';
import Agromart from '../../Static/Agromart.png';
import InternImage from '../../Static/Intern.png';
import Ionic from '../../Static/Ionic.png';
import BMI from '../../Static/BMI.png';
// Import language icons
import html from '../../Static/icon/html.png';
import css from '../../Static/icon/cssl.png';
import js from '../../Static/icon/js.png';
import bootstrap from '../../Static/icon/bootstrap.png';
import dj from '../../Static/icon/django.png';
import py from '../../Static/icon/python.png';
import php from '../../Static/icon/php.png';
import cSharp from '../../Static/icon/c-sharp.png'
import codeIgniter from '../../Static/icon/codeIgniter.png'
import java from '../../Static/icon/java.png'
import ionic from '../../Static/icon/ionicA.png'


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 70px;
`;

const MainContainer = styled.div`
  width: 100%;
  margin-top: 75px;
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
      title: 'Words Weighted Score Internship System',
      /*description: '"Words Weighted Score" A web based system applying a natural language toolkit libraries for word score tokenizing and sentiment paragraph analysis.',*/
      image: InternImage,
      link: 'https://github.com/rgoloys/Words-Weighted-Score-and-Sentiment-Analysis',
      icons: [html, css, js, bootstrap, py, dj]
    },
    {
      title: 'AGROMART: A web based system for agricultural market',
      /*description: 'E-commerce website that promotes the goods and services of our agricultural sector.',*/
      image: Agromart,
      link: 'https://github.com/rgoloys/AGROMART-A-Web-Based-System-For-Agricultural-Market',
      icons: [html, css, js, bootstrap, php, codeIgniter]
    },
    {
      title: 'Ionic-Angular UI Components Manipulation',
      /*description: 'Manipulating ionic UI components.',*/
      image: Ionic,
      link: 'https://github.com/rgoloys/My-Activities-in-Ionic-Angular',
      icons: [html, css, js, ionic]
    },
    {
      title: 'BMI Automated Calculation',
      /*description: 'C# projects using object-oriented programming.',*/
      image: BMI,
      link: 'https://github.com/rgoloys/C_Sharp-BMI-Automated-calculation',
      icons: [cSharp]
    }
  ];

  return (
    <MainContainer id='projects'>
      <HeadLine>Recent Projects</HeadLine>
      <Container>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
            icons={card.icons}
          />
        ))}
      </Container>
    </MainContainer>
  );
};

export default CardContainer;
