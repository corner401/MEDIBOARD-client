import React from 'react';
import NewsBox from './NewsBox'; 
import styles from "../css/newslist.module.css";

const newsData = [
  {
    title: 'oo버섯 사용 결과... “△△ 암 개선에 효과적”', 
    content: 'ㅁㅁ대 약학과 ◎◎◎교수, 23일 등재된 논문에 따르면,,',
    date: '2024/02/14',
    author: 'YTS',
  },
  {
    title: 'oo버섯 사용 결과... “△△ 암 개선에 효과적”', 
    content: 'ㅁㅁ대 약학과 ◎◎◎교수, 23일 등재된 논문에 따르면,,',
    date: '2024/02/14',
    author: 'YTS',
  },
  {
    title: 'oo버섯 사용 결과... “△△ 암 개선에 효과적”', 
    content: 'ㅁㅁ대 약학과 ◎◎◎교수, 23일 등재된 논문에 따르면,,',
    date: '2024/02/14',
    author: 'YTS',
  },
  // Add more news data here...
];

const NewsList = () => {
  return (
    <div className={styles.main_stuff}>
      {newsData.map((news, index) => (
        <NewsBox id={styles.newsbox}
          key={index}
          title={news.title}
          content={news.content}
          date={news.date}
          author={news.author}
        />
      ))}
    </div>
  );
};

export default NewsList;