import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

const MyPage = () => {
  const [interests, setInterests] = useState(['economy', 'it']);
  const [dailyGoal, setDailyGoal] = useState(3);
  const [isEditing, setIsEditing] = useState(false);

  const toggleInterest = (value) => {
    if (!isEditing) return;
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSave = (e) => {
    e?.preventDefault();
    setIsEditing(false);
    // TODO: API 연동
  };

  return (
    <Wrapper>
      <ProfileSection>
        <CharacterWrapper>
          <CharacterDisplay>👩🏻‍💻</CharacterDisplay>
          <CharacterLabel>뉴스를 읽고 목표를 달성하면 캐릭터가 성장해요</CharacterLabel>
        </CharacterWrapper>
        
      </ProfileSection>

      <GoalSection>
        <SectionHeader>
          <SectionTitle>나의 목표</SectionTitle>
          {isEditing ? (
            <ButtonGroup>
              <TextButton onClick={() => setIsEditing(false)}>취소</TextButton>
              <SaveButton onClick={handleSave}>저장</SaveButton>
            </ButtonGroup>
          ) : (
            <EditButton onClick={() => setIsEditing(true)}>수정</EditButton>
          )}
        </SectionHeader>

        <GoalCard>
          <GoalItem>
            <GoalLabel>관심분야</GoalLabel>
            <InterestChips>
              {isEditing ? (
                INTEREST_OPTIONS.map(({ value, label }) => (
                  <Chip
                    key={value}
                    as="button"
                    type="button"
                    $selected={interests.includes(value)}
                    $clickable
                    onClick={() => toggleInterest(value)}
                  >
                    {label}
                  </Chip>
                ))
              ) : (
                interests.map((v) => {
                  const opt = INTEREST_OPTIONS.find((o) => o.value === v);
                  return opt ? (
                    <Chip key={v} $selected>
                      {opt.label}
                    </Chip>
                  ) : null;
                })
              )}
            </InterestChips>
          </GoalItem>

          <GoalItem>
            <GoalLabel>하루 목표</GoalLabel>
            {isEditing ? (
              <DailyGoalEdit>
                <input
                  type="number"
                  min={1}
                  max={50}
                  value={dailyGoal}
                  onChange={(e) =>
                    setDailyGoal(
                      Math.min(50, Math.max(1, Number(e.target.value) || 1))
                    )
                  }
                />
                <span>편</span>
              </DailyGoalEdit>
            ) : (
              <GoalValue>{dailyGoal}편</GoalValue>
            )}
          </GoalItem>
        </GoalCard>
      </GoalSection>
    </Wrapper>
  );
};

export default MyPage;

const Wrapper = styled.div`
  max-width: 560px;
  margin: 0 auto;
  padding: 40px 24px;
`;

const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px;
  border-radius: 20px;
  margin-bottom: 32px;
`;

const CharacterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

const CharacterDisplay = styled.div`
  font-size: 150px;
  margin-bottom: 8px;
`;

const CharacterLabel = styled.span`
  font-size: 14px;
  color: #64748b;
`;

const CharacterSelect = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;

const CharacterOption = styled.button`
  width: 48px;
  height: 48px;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid
    ${({ $selected }) => ($selected ? '#2563eb' : '#e2e8f0')};
  border-radius: 12px;
  background: ${({ $selected }) => ($selected ? '#eff6ff' : '#fff')};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #94a3b8;
  }
`;

const GoalSection = styled.section`
  padding: 0;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #1e293b;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const EditButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  color: #2563eb;
  background: #eff6ff;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #dbeafe;
  }
`;

const TextButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  color: #64748b;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #334155;
  }
`;

const SaveButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background: #2563eb;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #1d4ed8;
  }
`;

const GoalCard = styled.div`
  background: #fff;
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 16px;
`;

const GoalItem = styled.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const GoalLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 10px;
`;

const GoalValue = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
`;

const InterestChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Chip = styled.span`
  display: inline-block;
  padding: 8px 14px;
  font-size: 14px;
  border: 2px solid
    ${({ $selected }) => ($selected ? '#2563eb' : '#e2e8f0')};
  border-radius: 999px;
  background: ${({ $selected }) => ($selected ? '#eff6ff' : '#fff')};
  color: #334155;
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
  transition: all 0.2s;

  &:hover {
    ${({ $clickable }) => ($clickable ? 'border-color: #94a3b8;' : '')}
  }
`;

const DailyGoalEdit = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    width: 80px;
    padding: 10px 14px;
    font-size: 18px;
    font-weight: 600;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
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

const GoalLink = styled(Link)`
  display: inline-block;
  font-size: 14px;
  color: #2563eb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
