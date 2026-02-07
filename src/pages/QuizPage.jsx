import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const QuizPage = () => {
  const [searchParams] = useSearchParams();
  const articleId = searchParams.get('articleId'); // API 연동 후 사용

  const question = '빗썸은 패닉셀로 손해를 본 고객에게 110% 보상을 지급할 예정이다.';

  const handleAnswer = (answer) => {
    console.log('답변:', answer);
    // TODO: 정답 체크 
  };

  return (
    <Wrapper>
      <Character>🧑‍🏫</Character>
      <Question>{question}</Question>
      <AnswerButtons>
        <OButton onClick={() => handleAnswer('O')}>O</OButton>
        <XButton onClick={() => handleAnswer('X')}>X</XButton>
      </AnswerButtons>
    </Wrapper>
  );
};

export default QuizPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 72px);
  padding: 40px 24px;
`;

const Character = styled.div`
  font-size: 120px;
  margin-bottom: 40px;
`;

const Question = styled.p`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  line-height: 1.6;
  color: #1e293b;
  max-width: 480px;
  margin-bottom: 60px;
`;

const AnswerButtons = styled.div`
  display: flex;
  gap: 40px;
`;

const AnswerButton = styled.button`
  width: 140px;
  height: 140px;
  font-size: 64px;
  font-weight: 800;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const OButton = styled(AnswerButton)`
  color: #16a34a;
  background: #f0fdf4;

  &:hover {
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.4);
  }
`;

const XButton = styled(AnswerButton)`
  color: #dc2626;
  background: #fef2f2;

  &:hover {
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.4);
  }
`;
