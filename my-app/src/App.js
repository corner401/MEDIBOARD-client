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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/chart" element={<ChartListPage />} />
          <Route path="/news" element={<NewsListPage />} />
          <Route path="/rank" element={<RankPage />} />

          <Route path="/test" element={<PowerBIConnectTest />} />
        </Routes>
      </Router>
    </>
      
    
  );
}

export default App;
