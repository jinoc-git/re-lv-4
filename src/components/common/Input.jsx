import React, { useState } from 'react';
import { css, styled } from 'styled-components';

const Input = ({ children, ...props }) => {
  const [value, setValue] = useState('');
  const { type, name, refs } = props;

  return (
    <ShareInput
      {...props}
      type={type}
      name={name}
      ref={refs}
      value={value}
      onChange={({ target }) => setValue(target.value)}
      placeholder={name}>
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
  border: 0.5px solid ${(bc) => bc};
  border-radius: 5px;
`;
