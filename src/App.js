import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";

import HomeLanding from "./pages/HomeLanding";
import NewsReadingPage from "./pages/NewsReadingPage";
import MyPage from "./pages/MyPage";
import GoalSettingPage from "./pages/GoalSettingPage";
import Login from "./pages/Login";
import LoginCallback from "./pages/LoginCallback";

import RequireAuth from "./routes/RequireAuth";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomeLanding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/callback" element={<LoginCallback />} />

          {/* 아래부터 로그인 필요 */}
          <Route element={<RequireAuth />}>
            <Route path="/news" element={<NewsReadingPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/goals" element={<GoalSettingPage />} />
          </Route>
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

const Main = styled.main`
  padding-top: 72px;
  min-height: 100vh;
`;

export default App;
