import React from 'react';
import { css, styled } from 'styled-components';

const Button = ({ children, fnc, ...props }) => {
  return (
    <Btn {...props} onClick={fnc}>
      {children}
    </Btn>
  );
};

export default Button;

const Btn = styled.button`
  cursor: pointer;
  border: none;
  color: ${({fc}) => fc};
  background-color: ${({bc}) => bc};
  ${({size}) => {
    switch (size) {
      case 'small':
        return css`
          width: 100px;
          height: 40px;
          border-radius: 8px;
          font-size: 16px;
        `
      case 'medium':
        return css`
          width: 140px;
          height: 45px;
          border-radius: 10px;
          font-size: 18px;
        `
      case 'large':
        return css`
          width: 180px;
          height: 50px;
          border-radius: 12px;
          font-size: 20px;
        `
      default:
        return css`
          width: 140px;
          height: 45px;
          border-radius: 10px;
          font-size: 18px;
        `;
    }
  }}
  ${({bc}) => {

  }}
  
`;
