import React, { useState } from 'react';
import NewsLayout from '../components/layout/NewsLayout';
import NewsArticle from '../components/news/NewsArticle';
import TermGuide from '../components/news/TermGuide';
import TermDetailModal from '../components/news/TermDetailModal';
import { getSentenceTerms } from '../apis/newsApi';
import styled from 'styled-components';
import LogoImg from '../assets/images/Logo.png';

const NEWS = {
  id: 1,
  title: `빗썸 "비트코인 오지급 관련 고객 손실 10억 안팎…110% 보상"`,
  content: `
(서울=연합뉴스) 한지훈 기자 = 가상자산 거래소 빗썸은 비트코인 오(誤)지급에 따른 고객 손실 금액을 10억원 안팎으로 파악하고 있다고 7일 밝혔다.

이재원 빗썸 대표이사는 이날 공지사항을 통해 "비트코인 시세 급락으로 인해 고객 입장에서 불리한 조건으로 체결된 사례(패닉셀·투매)가 확인됐다"며 이같이 말했다.

빗썸은 비트코인 시세 급락 때 패닉셀로 손해를 본 고객에게 매도 차익 전액과 10%의 추가 보상을 지급할 계획이다.

아울러 사고 시간대에 빗썸 서비스에 접속하고 있던 모든 고객에게 2만원의 보상을 지급하기로 했다.

이 대표는 "고개 숙여 진심으로 사과드린다"며 "고객 손실이 발생하지 않도록 끝까지 책임지겠다"고 약속했다.

hanjh@yna.co.kr
`,
};

const NewsReadingPage = () => {
  const [leftTerm, setLeftTerm] = useState(null);
  const [rightTerm, setRightTerm] = useState(null);
  const [leftLoading, setLeftLoading] = useState(false);
  const [rightLoading, setRightLoading] = useState(false);
  const [leftError, setLeftError] = useState(null);
  const [rightError, setRightError] = useState(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [currentArticleId, setCurrentArticleId] = useState(null);
  const [currentSentenceId, setCurrentSentenceId] = useState(null);

  const handleSentenceClick = async (articleId, sentenceId) => {
    setLeftTerm(null);
    setRightTerm(null);
    setLeftError(null);
    setRightError(null);
    setLeftLoading(true);
    setRightLoading(true);
    setCurrentArticleId(articleId);
    setCurrentSentenceId(sentenceId);

    try {
      const data = await getSentenceTerms(articleId, sentenceId, false);
      const terms = data?.terms ?? Array.isArray(data) ? data : [];
      setLeftTerm(terms[0] ?? null);
      setRightTerm(terms[1] ?? null);
    } catch (err) {
      setLeftError('오류가 발생했습니다.');
    } finally {
      setLeftLoading(false);
      setRightLoading(false);
    }
  };

  const handleMoreClick = (term) => {
    setSelectedTerm(term);
    setDetailModalOpen(true);
  };

  const handleCloseModal = () => {
    setDetailModalOpen(false);
    setSelectedTerm(null);
  };

  return (
    <>
      <LogoWrapper>
        <img src={LogoImg} alt="NewGenie" />
      </LogoWrapper>
      <NewsLayout
        left={
          <TermGuide
            term={leftTerm}
            loading={leftLoading}
            error={leftError}
            onMoreClick={handleMoreClick}
          />
        }
        article={
          <NewsArticle news={NEWS} onSentenceClick={handleSentenceClick} />
        }
        right={
          <TermGuide
            term={rightTerm}
            loading={rightLoading}
            error={leftError ? null : rightError}
            onMoreClick={handleMoreClick}
          />
        }
      />
      <TermDetailModal
        isOpen={detailModalOpen}
        term={selectedTerm}
        articleId={currentArticleId}
        sentenceId={currentSentenceId}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default NewsReadingPage;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;

  img {
    max-height: 100px;
    object-fit: contain;
  }
`;
