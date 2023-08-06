//{/* 통계 자료 데이터 목록 페이지 chart*/}
import React, { useState, useEffect } from 'react';
// import React, { Fragment } from 'react';
import styles from '../css/chartListPage.module.css';
import ChartList from '../components/ChartList';
import HashTag from '../components/HashTag';
import Menubar from '../components/Menubar';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ChartListPage = () => {
    
    const [chartList, setChartList] = useState([]);

    useEffect(() => {
        axios.get("api/stat/list").then((response) => {
          console.log(response.data);
          setChartList(response.data);
        })
      },[])

    const tagList = [
        "병원위치",
        "외래진료",
        "응급실",
        "상급병원",
        "요양병원",
        "종합병원",
        "치과의원",
        "한방병원",
        "보건소",
    ];

    const TagList = tagList.map((data, index) => {
        return <HashTag tagName={data} key={index} />;
    });

    return (
        <>
            <Menubar />
            <div className={styles.main}>
                <div id={styles.menu_titlebar}>
                    <div id={styles.menu_left}>
                        <img
                            src={require("../media/chart_icon_title.png")}
                            alt="main_1"
                        />
                        <h2 id={styles.menu_title}>통계 자료 데이터 목록</h2>
                    </div>
                    <div id={styles.menu_right}>
                        <h3 id={styles.user_name}>user name</h3>
                        <img
                            src={require("../media/Entrepreneur.png")}
                            alt="main_1"
                        />
                    </div>
                </div>
                <div id={styles.search_box}>
                    {" "}
                    {/* 검색창 */}
                    <input
                        id={styles.search_input}
                        placeholder="검색어를 입력하세요"
                    />
                    <Link id={styles.search_button}>
                        <img
                            id={styles.search_icon}
                            src="../media/search.png"
                            alt="search 돋보기"
                        />
                    </Link>
                </div>

                <div>
                    {" "}
                    {/* 예시 해쉬태그# 검색어 */}
                    {TagList}
                </div>

                <div>
                    {" "}
                    {/* powerbi 전체 묶음 */}
                    <ChartList data={chartList} />
                </div>
            </div>
        </>
    );
};

export default ChartListPage;
