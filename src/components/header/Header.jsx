import React from 'react';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderLayout>
      <LogoBox>
        <h1>#Music</h1>
      </LogoBox>
      <Nav>
        <NavList>
          <NavItem onClick={() => navigate('/')}>홈</NavItem>
          <NavItem onClick={() => navigate('/internal')}>국내</NavItem>
          <NavItem onClick={() => navigate('/abroad')}>해외</NavItem>
        </NavList>
      </Nav>
      {/* lv5 준비 */}
      <UserBox>
        <User></User>
      </UserBox>
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: aliceblue;
`;
const LogoBox = styled.div`
  width: 120px;
  text-align: center;
`;
const Nav = styled.nav`
  width: 50%;
  text-align: center;
`;
const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: beige;
`;
const NavItem = styled.li`
  cursor: pointer;
  width: 10%;
  height: 40px;
  padding-top: 11px;
  background-color: aqua;
`;
const UserBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100%;
`;
const User = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid;
  background-color: antiquewhite;
`;
