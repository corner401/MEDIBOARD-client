import React from 'react';
import NewsBox from './NewsBox'; 
import styles from "../css/newslist.module.css";

const NewsList = (props) => {

  const data = props.data || null; // 뉴스 기사 배열

  const NewsList = data.map((data, index) => {
    return <NewsBox data={data} key={index} />;
  });

  return (
    <div className={styles.main_stuff}>
      {NewsList}
    </div>
  );
};

export default NewsList;