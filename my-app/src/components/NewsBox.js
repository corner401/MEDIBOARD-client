import React from 'react';
import styles from '../css/newsBox.module.css';
import { Link } from 'react-router-dom';

const NewsBox = (props) => {
    const data = props.data;

    return (
        <Link className={styles.main_stuff} to={data.link}>
            <h2 id={styles.title}>{data.title}</h2>       {/* 제목 title */}
            <div id={styles.content}>
                <p id={styles.content_text}>{data.content}</p>
            </div>
            <div className={styles.discribe_box}>
                <p id={styles.author}>{data.writer}</p>기자       {/* 날짜 date */}
                <p id={styles.date}>{data.updateDate.substr(0,10)}</p>           {/* 뉴스 출처 author */}
            </div>
        </Link>
    );
};

export default NewsBox;