// src/pages/LoginCallback.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext"; // 경로가 다르면 맞춰주세요

export default function LoginCallback() {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token"); // 백엔드가 token이라는 이름으로 준다고 가정

    if (!token) {
      navigate("/login", { replace: true });
      return;
    }

    login(token);

    const from = sessionStorage.getItem("login_redirect_from") || "/";
    sessionStorage.removeItem("login_redirect_from");
    navigate(from, { replace: true });
  }, [login, navigate]);

  return <div style={{ padding: 24 }}>로그인 처리 중...</div>;
}
