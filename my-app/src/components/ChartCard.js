import React from 'react';
import ChartBox from './ChartBox';
import { Link } from 'react-router-dom';
import styles from '../css/chartCard.module.css';

const ChartCard = (props) => {
	const data = props.data;
  const reportId = data.reportId;
	const embedUrl = data.embedUrl;
  const accessToken = data.accessToken;

  return (
    <Link className={styles.cardContainer} to={`/chart/detail`} state={{ data: data && data.id }}>
      <div className={styles.title_container}>
        <div className={styles.title}>{data.title}</div>
        <button className={styles.star_button}>
          <img className={styles.star_icon} src={require("../media/star_off.png")} alt="즐겨찾기 해제됨"/>
        </button>
      </div>
      <ChartBox reportId={reportId} embedUrl={embedUrl} accessToken={accessToken} />
    </Link>
  );
};

export default ChartCard;