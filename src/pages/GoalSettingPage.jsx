import { useState } from 'react';
import styled from 'styled-components';

const INTEREST_OPTIONS = [
  { value: 'economy', label: '경제/금융' },
  { value: 'broadcast', label: '방송/통신' },
  { value: 'it', label: 'IT/기술' },
  { value: 'sports', label: '스포츠/연예' },
  { value: 'society', label: '사회/이슈' },
  { value: 'politics', label: '정치/국제' },
  { value: 'etc', label: '기타' },
];

const GoalSettingPage = () => {
  const [interests, setInterests] = useState([]);
  const [dailyGoal, setDailyGoal] = useState(0);

  const toggleInterest = (value) => {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ interests, dailyGoal });
    // TODO: API 연동
  };

  return (
    <Wrapper>
      <PageTitle>목표를 정하면, 뉴지니가 달성까지 함께할게요.</PageTitle>
      <Form onSubmit={handleSubmit}>
        <Section>
          <SectionTitle>관심분야</SectionTitle>
          <SectionDesc>관심 있는 분야를 선택해 주세요 (복수 선택 가능)</SectionDesc>
          <OptionGrid>
            {INTEREST_OPTIONS.map(({ value, label }) => (
              <OptionLabel key={value} $selected={interests.includes(value)}>
                <input
                  type="checkbox"
                  value={value}
                  checked={interests.includes(value)}
                  onChange={() => toggleInterest(value)}
                />
                <span>{label}</span>
              </OptionLabel>
            ))}
          </OptionGrid>
        </Section>

        <Section>
          <SectionTitle>하루 목표</SectionTitle>
          <SectionDesc>하루에 읽을 목표 편수를 입력해 주세요.</SectionDesc>
          <DailyGoalInput>
            <input
              type="input"
              value={dailyGoal}
              onChange={(e) =>
                setDailyGoal(e.target.value) || 0
              }
            />
            <span>편</span>
          </DailyGoalInput>
        </Section>

        <SubmitButton type="submit">저장하기</SubmitButton>
      </Form>
    </Wrapper>
  );
};

export default GoalSettingPage;

const Wrapper = styled.div`
  max-width: 560px;
  margin: 0 auto;
  padding: 40px 24px;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 32px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
`;

const SectionDesc = styled.p`
  font-size: 14px;
  color: #64748b;
`;

const OptionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (min-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  border: 2px solid ${({ $selected }) => ($selected ? '#2563eb' : '#e2e8f0')};
  border-radius: 12px;
  background: ${({ $selected }) => ($selected ? '#eff6ff' : '#fff')};
  cursor: pointer;
  transition: all 0.2s;

  input {
    display: none;
  }

  span {
    font-size: 15px;
    color: #334155;
  }

  &:hover {
    border-color: #94a3b8;
    color: #94a3b8;
  }
`;

const DailyGoalInput = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    width: 60px;
    padding: 10px;
    font-size: 15px;
    font-weight: 600;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    text-align: center;

    &:focus {
      outline: none;
      border-color: #2563eb;
    }
  }

  span {
    font-size: 16px;
    color: #64748b;
  }
`;

const SubmitButton = styled.button`
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: #2563eb;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background: #1d4ed8;
  }
`;
