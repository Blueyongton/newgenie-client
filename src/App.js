import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/layout/Header';
import HomeLanding from "./pages/HomeLanding";
import NewsReadingPage from './pages/NewsReadingPage';
import MyPage from './pages/MyPage';
import GoalSettingPage from './pages/GoalSettingPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomeLanding />} />
          <Route path="/news" element={<NewsReadingPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/goals" element={<GoalSettingPage />} />
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
