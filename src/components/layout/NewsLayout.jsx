import React from 'react'
import styled from "styled-components";

const NewsLayout = ({ left, article, right }) => {
  return (
    <LayoutWrapper>
      <SideWrapper>{left}</SideWrapper>
      <ContentWrapper>{article}</ContentWrapper>
      <SideWrapper>{right}</SideWrapper>
    </LayoutWrapper>
  );
};

export default NewsLayout

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr 1fr;
  gap: 20px;
  padding: 40px;
  min-height: 100vh;
`;

const SideWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const ContentWrapper = styled.main`
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
`;