import React, { useState } from 'react';
import { css, styled } from 'styled-components';

const Input = ({ children, type, ...props }) => {
  const [value, setValue] = useState('');

  return (
    <ShareInput
      type={type}
      {...props}
      value={value}
      onChange={({ target }) => setValue(target.value)}>
      {children}
    </ShareInput>
  );
};

export default Input;

const ShareInput = styled.input`
  ${(props) => {
    return css`
      width: ${props.width}%;
      height: ${props.height}px;
    `;
  }}
  font-size: 18px;
  padding: 0 10px;
  border: 0.5px solid;
`;
