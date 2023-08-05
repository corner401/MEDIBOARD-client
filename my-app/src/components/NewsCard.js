import React from 'react';
import styles from '../css/newsCard.module.css';


const NewsCard = (props) => {
	const data = props.data;
	const newsTitle = data.newsTitle;          {/* 제목 title */}
    const newsContents = data.newsContents;    {/* 요약 내용 content */}
    const newsAuthor = data.newsAuthor;        {/* 뉴스 출처 author */}
    const newsDate = data.newsDate;            {/* 날짜 date */}

    return (
    	<div className={styles.newsCardbox}>{/* 배경 박스 */}
			{/* <div id={styles.title}>{newsTitle}</div>
			<div id={styles.contents}>{newsContents}</div>
			<div id={styles.author}>{newsAuthor}</div>
			<div id={styles.date}>{newsDate}</div> */}
            {/* <NewsCard/> */}
		</div>
    );
};

export default NewsCard;


            //   <p>oo버섯 사용 결과... “△△ 암 개선에 효과적”</p>  {/* 제목 title */}
            //   <p>ㅁㅁ대 약학과 ◎◎◎교수, 23일 등재된 논문에 따르면,,</p>  {/* 요약 내용 content */}
            //   <p>YTS</p>  {/* 뉴스 출처 author */}
            //   <p>2024/02/14</p>  {/* 날짜 date */}
