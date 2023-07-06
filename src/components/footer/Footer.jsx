import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Footer = () => {
  return (
    <FooterLayout>
      <Box>
        <FooterLink target="_blank" to={'https://nbcamp.spartacodingclub.kr/'}>
          내일배움캠프
        </FooterLink>
        <p style={{ margin: '10px 0' }}>
          © 2023 &nbsp;
          <FooterLink target="_blank" to={''}>
            #Music
          </FooterLink>{' '}
          &nbsp;powered by &nbsp;
          <FooterLink target="_blank" to={'https://github.com/jinoc-git'}>
            Jinoc
          </FooterLink>
        </p>
      </Box>
    </FooterLayout>
  );
};

export default Footer;

const FooterLayout = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 150px;
  margin-top: 100px;
  background-color: bisque;
`;
const Box = styled.div`
  text-align: center;
  margin-top: 20px;
`;
const FooterLink = styled(Link)`
  font-weight: 600;
  &:hover {
    color: #222;
  }
  &:visited {
    color: #222;
  }
`;
const Span = styled.span`
  cursor: pointer;
  font-weight: 600;
`;
