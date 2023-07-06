import React from 'react';
import { styled } from 'styled-components';

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
`;
