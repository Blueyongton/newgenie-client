// src/pages/HomeLanding.jsx
import "./HomeLanding.css";

export default function HomeLanding() {
  return (
    <div className="page">
      <aside className="sidebar">
        <div className="logo">NewGenie</div>

        <button className="myPageBtn" type="button">
          <span className="myPageDot" />
          <span>마이페이지</span>
        </button>
      </aside>

      <main className="main">
        <section className="inputSection">
          <h1 className="headline">어떤 기사를 요약할까요?</h1>

          <div className="inputBox">
            {/* 왼쪽 별 아이콘(원하면 제거 가능) */}
            <div className="leftIcon" aria-hidden="true">★</div>

            <input
              className="urlInput"
              placeholder="기사 링크를 여기에 붙여넣으세요..."
            />

            {/* 오른쪽 동그란 버튼 + 화살표(SVG) */}
            <button className="submitBtn" type="button" aria-label="요약하기">
              <svg
                className="arrowIcon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H18"
                  stroke="white"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
                <path
                  d="M13 7L18 12L13 17"
                  stroke="white"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </section>

        <section className="recs">
          <div className="recTitle">추천 기사</div>

          {/* 지금은 더미 카드(나중에 진짜 기사 API로 교체) */}
          <div className="cardGrid">
            <div className="card">
              <div className="thumb" />
              <div className="cardTitle">생성형 AI의 미래</div>
              <div className="cardDesc">2024년 기술 트렌드…</div>
            </div>
            <div className="card">
              <div className="thumb" />
              <div className="cardTitle">스타트업 투자 동향</div>
              <div className="cardDesc">최근 VC들의 움직임…</div>
            </div>
            <div className="card">
              <div className="thumb" />
              <div className="cardTitle">글로벌 경제 전망</div>
              <div className="cardDesc">금리 인하와 시장 변화…</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
