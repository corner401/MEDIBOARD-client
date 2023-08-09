import React from 'react';
import styles from '../css/newsBox.module.css';

const NewsBox = ({ title, content, date, author }) => {
    return (
        <div className={styles.main_stuff}>
            <h2 id={styles.title}>{title}</h2>       {/* 제목 title */}
            <p id={styles.content}>{content}</p>     {/* 요약 내용 content */}
            <div className={styles.discribe_box}>
                <p id={styles.author}>{author}</p>       {/* 날짜 date */}
                <p id={styles.date}>{date}</p>           {/* 뉴스 출처 author */}
            </div>
        </div>
    );
};

export default NewsBox;