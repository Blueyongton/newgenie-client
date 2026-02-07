import React from "react";
import styled from "styled-components";

export default function TermGuide({ term, loading, error, onMoreClick }) {
  if (loading) {
    return (
      <Wrapper>
        <Character>🧑‍🏫</Character>
        <Bubble>
          <LoadingText>설명 불러오는 중...</LoadingText>
        </Bubble>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <Character>🧑‍🏫</Character>
        <Bubble>
          <ErrorText>{error}</ErrorText>
        </Bubble>
      </Wrapper>
    );
  }

  if (!term) return null;

  return (
    <Wrapper>
      <Character>🧑‍🏫</Character>
      <Bubble>
        <p>
          <b>{term.term}</b>
          {term.description ?? term.shortDescription ?? ''}
        </p>
        <MoreButton onClick={() => onMoreClick?.(term)}>더보기</MoreButton>
      </Bubble>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: sticky;
  top: 120px;
  text-align: center;
`;

const Character = styled.div`
  font-size: 50px;
`;

const Bubble = styled.div`
  margin-top: 10px;
  padding: 15px;
  background: #f1f5f9;
  border-radius: 16px;
  max-width: 180px;
  font-size: 14px;
`;

const MoreButton = styled.button`
  margin-top: 10px;
  font-size: 13px;
  border: none;
  background: none;
  color: #2563eb;
  cursor: pointer;
`;

const LoadingText = styled.p`
  margin: 0;
  color: #64748b;
  font-size: 13px;
`;

const ErrorText = styled.p`
  margin: 0;
  color: #dc2626;
  font-size: 13px;
`;
