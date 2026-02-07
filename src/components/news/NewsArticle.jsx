import React from "react";
import { Link } from "react-router-dom";
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
      <QuizLink to={`/quiz?articleId=${news.id}`}>
        퀴즈 풀러가기
      </QuizLink>
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

const QuizLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 24px;
  margin-top: 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
  border: none;
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    box-shadow: 0 0px 12px rgba(37, 99, 235, 0.6);
  }
`;
