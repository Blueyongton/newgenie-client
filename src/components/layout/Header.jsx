import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoBox to="/">로고</LogoBox>
      <Nav>
        <MyPageLink to="/mypage">마이페이지</MyPageLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 40px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  z-index: 100;
`;

const LogoBox = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 40px;
  background: #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  color: #64748b;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const MyPageLink = styled(Link)`
  font-size: 15px;
  color: #334155;
  text-decoration: none;
  &:hover {
    color: #2563eb;
  }
`;
