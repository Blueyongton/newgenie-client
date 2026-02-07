// src/pages/Login.jsx
import "./Login.css";

export default function Login() {
  const handleKakaoLogin = () => {
    console.log("카카오 로그인 클릭");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <div className="brand">NewGenie</div>
          <div className="subtitle">카카오로 간편하게 로그인하세요</div>
        </div>

        <button className="kakao-btn" onClick={handleKakaoLogin}>
          <span className="kakao-icon" aria-hidden="true">💬</span>
          <span>카카오로 시작하기</span>
        </button>

        <div className="login-footer">
          <small>로그인하면 서비스 이용약관 및 개인정보 처리방침에 동의하게 됩니다.</small>
        </div>
      </div>
    </div>
  );
}
