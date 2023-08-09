//{/* 통계 자료 데이터 목록 페이지 chart*/}
import React, { useState, useEffect } from "react";
// import React, { Fragment } from 'react';
import styles from "../css/chartListPage.module.css";
import ChartList from "../components/ChartList";
import HashTag from "../components/HashTag";
import Menubar from "../components/Menubar";
import { Link } from "react-router-dom";
import axios from "axios";
import TopNav from "../components/TopNav";

//* 상단 나브 바
const pageIconAddress = "../media/chart_icon_title.jpg";
const pageTitleText = "통계 자료 데이터 목록";

const ChartListPage = () => {
    const [chartList, setChartList] = useState([]);

    const [keyword, setKeyword] = useState([]);

    function handleChange(e) {
        console.log(e.target.value);
        setKeyword(e.target.value);
    }

    // hagtag 검색 추가 예정
    function searchWord() {
        axios.get("/api/stat/list?keyword=" + keyword).then((response) => {
            if (response.data) {
                setChartList(response.data);
            }
        });
    }

    useEffect(() => {
        axios.get("api/stat/list").then((response) => {
            console.log(response.data);
            setChartList(response.data);
        });
    }, []);

    const tagList = [
        "의약품",
        "요양기관",
        "진료정보",
        "환자표본",
        "병원평가",
        "응급",
        "의료자원",
        "지역별",
        "위치정보",
        "실시간",
        "기간별",
        "약국",
    ];

    const TagList = tagList.map((data, index) => {
        return <HashTag tagName={data} key={index} />;
    });

    return (
        <>
            <Menubar />
            <div className={styles.main}>
                <TopNav pageIcon={pageIconAddress} pageTitle={pageTitleText} />
                <p>keyword - {keyword}</p>

                <div id={styles.search_box}>
                    {" "}
                    {/* 검색창 */}
                    <input
                        name="keyword"
                        id={styles.search_input}
                        placeholder="검색어를 입력하세요"
                        onChange={handleChange}
                    />
                    <button id={styles.search_button} onClick={searchWord}>
                        <img
                            id={styles.search_icon}
                            src="../media/search.png"
                            alt="search 돋보기"
                        />
                    </button>
                </div>

                <div>
                    {/* 예시 해쉬태그# 검색어 */}

                    {TagList}
                </div>

                <div>
                    {/* powerbi 전체 묶음 */}
                    <ChartList data={chartList} />
                </div>
            </div>
        </>
    );
};

export default ChartListPage;
