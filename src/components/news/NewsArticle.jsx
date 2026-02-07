import React from "react";
import styled from "styled-components";

const NewsArticle = ({ news, onSentenceClick }) => {
  const sentences = news.content
    .trim()
    .split(/\n\n+/)
    .filter((s) => s.trim());

  return (
    <ArticleWrapper>
      <Title>{news.title}</Title>
      <Content>
        {sentences.map((sentence, i) => (
          <Sentence
            key={i}
            onClick={() =>
              onSentenceClick?.(news.id, i, sentence.trim())
            }
            $clickable={!!onSentenceClick}
          >
            {sentence.trim()}
          </Sentence>
        ))}
      </Content>
    </ArticleWrapper>
  );
};

export default NewsArticle;

const ArticleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: bold;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Sentence = styled.p`
  font-size: 17px;
  line-height: 1.8;
  color: #333;
  white-space: pre-line;
  margin: 0;
  ${({ $clickable }) =>
    $clickable &&
    `
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 8px;
    transition: background 0.2s;
    &:hover {
      background:rgb(227, 241, 255);
    }
  `}
`;
