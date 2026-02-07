// src/pages/HomeLanding.jsx
import { useState } from "react";
import "./HomeLanding.css";
import { FiArrowRight } from "react-icons/fi";
import { FiLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


export default function HomeLanding() {
  const [url, setUrl] = useState("");

  const handleSubmit = () => {
    const trimmed = url.trim();
    if (!trimmed) return;
  
    navigate("/login");
  };
  

  const navigate = useNavigate();


  return (
    <div className="page">

      <main className="main">
        <section className="inputSection">
          <h1 className="headline">어떤 기사를 요약할까요?</h1>

          <div className="inputBox">
          <div className="leftIcon" aria-hidden="true">
            <FiLink size={16} />
          </div>


            <input
              className="urlInput"
              placeholder="기사 링크를 여기에 붙여넣으세요..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubmit();
              }}
            />

            <button
                className={`submitBtn ${url.trim() ? "active" : ""}`}
                type="button"
                aria-label="요약하기"
                onClick={handleSubmit}
                disabled={!url.trim()}
            >
                <FiArrowRight size={30} color="black" />
            </button>
          </div>
        </section>

        <section className="recs">
          <div className="recTitle">추천 기사</div>

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
