// src/App.js
import { useState } from "react";
import HomeLanding from "./pages/HomeLanding";
import Login from "./pages/Login";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const [pendingUrl, setPendingUrl] = useState("");

  const goNext = (url) => {
    if (!isLoggedIn) {
      setPendingUrl(url);        
      setCurrentPage("login");   
      return;
    }
    // TODO: 로그인 상태면 요약 페이지로 보내거나 요약 실행
    console.log("Logged in. URL =", url);
  };

  const goMyPage = () => {
    if (!isLoggedIn) {
      setCurrentPage("login");
      return;
    }
    // TODO: 로그인 상태면 마이페이지로 이동 (나중에 구현)
    console.log("Go to MyPage");
  };
  

  if (currentPage === "login") {
    return (
      <Login
        onLoginSuccess={() => {
          setIsLoggedIn(true);
          setCurrentPage("home");

          if (pendingUrl) {
            console.log("After login, URL =", pendingUrl);
            // 여기서 요약 페이지로 보내거나 API 호출하면 됨
            // setPendingUrl(""); // 원하면 비우기
          }
        }}
      />
    );
  }

  return <HomeLanding onClickArrow={goNext} onClickMyPage={goMyPage} />;
}
