import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #A6ABAE;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #17202A;
  transition: background-color 0.3s;

  &:hover {
    background-color: #17202A;
    border: 1px solid white;
  }
`;

const resume = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}./Rolando-GoloyaJr_Resume.pdf`; // Ensure the path is correct
        link.download = 'RolandoGoloyaJr_Resume.pdf'; // Set the desired file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  return (
    <Button onClick={handleDownload}>
      Download Resume
    </Button>
  );
};


export default resume;
