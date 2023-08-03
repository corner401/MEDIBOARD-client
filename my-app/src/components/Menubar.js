import React from 'react';
import styles from '../css/menubar.module.css';
import { Link } from 'react-router-dom';

const Menubar = (props) => {
      
    return (
      <>
      <div className={styles.container}>
        <Link className={styles.menu} to={'/'}>
          <img className={styles.icon} src={require("../media/logo.png")} alt={`logo`} />
        </Link>
      
        <Link className={styles.menu} to={'/'}>
          <img className={styles.icon} src={require("../media/home_icon.png")} alt={`home`} />
          <div>서비스 소개</div>
        </Link>

        <Link to={'/dashboard'}>
          <img className={styles.icon} src={require("../media/dashboard_icon.png")} alt={`dashboard`} />
          <div>커스텀 대시보드</div>
        </Link>

        <Link to={'/chart'}>
          <img className={styles.icon} src={require("../media/chart_icon.png")} alt={`chart`} />
          <div>통계 자료 열람</div>
        </Link>

        <Link to={'/news'}>
          <img className={styles.icon} src={require("../media/news_icon.png")} alt={`news`} />
          <div>뉴스</div>
        </Link>

        <Link to={'/rank'}>
          <img className={styles.icon} src={require("../media/rank_icon.png")} alt={`rank`} />
          <div>랭킹</div>
        </Link>
      </div>
      </>
    );
  };
  
  export default Menubar;