import React from 'react';
import styles from '../css/menubar.module.css';
import { Link } from 'react-router-dom';

const Menubar = (props) => {
      
    return (
      <>
      <div className={styles.container}>
        <Link className={styles.logo} to={'/'}>
          <img className={styles.icon} src={require("../media/logo.png")} alt={`logo`} />
        </Link>
        <div className={styles.blank}/>
        <Link className={styles.menu} to={'/'}>
          <img className={styles.icon} src={require("../media/home_icon.png")} alt={`home`} />
          <div className={styles.menutext}>서비스 소개</div>
        </Link>

        <Link className={styles.menu} to={'/dashboard'}>
          <img className={styles.icon} src={require("../media/dashboard_icon.png")} alt={`dashboard`} />
          <div className={styles.menutext}>커스텀 대시보드</div>
        </Link>

        <Link className={styles.menu} to={'/chart'}>
          <img className={styles.icon} src={require("../media/chart_icon.png")} alt={`chart`} />
          <div className={styles.menutext}>통계 자료 열람</div>
        </Link>

        <Link className={styles.menu} to={'/news'}>
          <img className={styles.icon} src={require("../media/news_icon.png")} alt={`news`} />
          <div className={styles.menutext}>뉴스</div>
        </Link>

        <Link className={styles.menu} to={'/rank'}>
          <img className={styles.icon} src={require("../media/rank_icon.png")} alt={`rank`} />
          <div className={styles.menutext}>랭킹</div>
        </Link>
      </div>
      </>
    );
  };
  
  export default Menubar;