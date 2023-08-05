import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PowerBIConnectTest from './components/PowerBIConnectTest';
import MainPage from './pages/MainPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ChartListPage from './pages/ChartListPage';
import NewsListPage from './pages/NewsListPage';
import RankPage from './pages/RankPage';
import ChartDetailPage from './pages/ChartDetailPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />               {/* 루트 주소. 서비스 소개 페이지 */}
          <Route path="/signup" element={<SignupPage />} />       {/* 회원가입 페이지 */}
          <Route path="/login" element={<LoginPage />} />         {/* 로그인 페이지 */}
          <Route path="/dashboard" element={<DashboardPage />} /> {/* 커스텀 대시보드 페이지 */}
          <Route path="/chart" element={<ChartListPage />} />     {/* 통계 자료 데이터 목록 페이지 */}
          <Route path="/news" element={<NewsListPage />} />       {/* 뉴스 요약 페이지 */}
          <Route path="/rank" element={<RankPage />} />           {/* 데이터 활용 차트 순위 목록 페이지 */}
          <Route path="/detail" element={<ChartDetailPage />} />           {/* 데이터 활용 차트 순위 목록 페이지 */}

          <Route path="/test" element={<PowerBIConnectTest />} />
        </Routes>
      </Router>
    </>
      
    
  );
}

export default App;
