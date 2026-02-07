// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/layout/Header";

// import HomeLanding from "./pages/HomeLanding";
// import NewsReadingPage from "./pages/NewsReadingPage";
// import MyPage from "./pages/MyPage";
// import GoalSettingPage from "./pages/GoalSettingPage";
// import Login from "./pages/Login";
// import LoginCallback from "./pages/LoginCallback"; 

// import RequireAuth from "./routes/RequireAuth";

// function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
    
//         <Route path="/" element={<HomeLanding />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/login/callback" element={<LoginCallback />} />

//         <Route path="/goals" element={<GoalSettingPage />} />

//         <Route element={<RequireAuth />}>
//           <Route path="news" element={<NewsReadingPage />} />
//           <Route path="mypage" element={<MyPage />} />
//           {/* goals를 다시 보호하고 싶으면 여기로 옮기고 위 /goals는 삭제 */}
//           {/* <Route path="goals" element={<GoalSettingPage />} /> */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


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
          
          <Route path="/goals" element={<GoalSettingPage />} />
          
          {/* 아래부터 로그인 필요 */}
          <Route element={<RequireAuth />}>
            <Route path="/news" element={<NewsReadingPage />} />
            <Route path="/mypage" element={<MyPage />} />
            {/* <Route path="/goals" element={<GoalSettingPage />} /> */}
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


