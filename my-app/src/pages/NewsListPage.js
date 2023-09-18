//{/* 뉴스 요약 페이지 */}

import React, { useEffect, useState } from "react";
import Menubar from "../components/Menubar";
import styles from "../css/newslistpage.module.css";
import TopNav from "../components/TopNav";
import { Link } from "react-router-dom";
import NewsList from "../components/NewsList"; // NewsList.js 파일 경로에 맞게 수정
import axios from "axios";
import DonutChart from "../components/DonutChart";
import Paging from "../components/Paging";

//* 상단 나브 바
const pageIconAddress = "../media/news_icon_title.jpg";
const pageTitleText = "뉴스 요약";

const NewsListPage = () => {
    const [articleList, setArticleList] = useState([]);
    const [keyword, setKeyword] = useState("");

    // 최초 화면 진입 시 뉴스기사 목록 (전체) 받아오기
    useEffect(() => {
        axios.get("/api/news/list").then((response) => {
            if (response.data) {
                console.log(response.data);
                setArticleList(response.data);
            }
        });
    }, []);

    // 검색키워드 적용해 뉴스기사 목록 받아오기
    // useEffect(() => {
    //     axios.get("/api/news/list?keyword=" + keyword).then((response) => {
    //         if (response.data) {
    //             // console.log(response.data);
    //             setArticleList(response.data);
    //         }
    //     });
    // }, [keyword]);

    function handleChange(e) {
        console.log(e.target.value);
        setKeyword(e.target.value);
    }

    function searchWord() {
        axios.get("/api/news/list?keyword=" + keyword).then((response) => {
            if (response.data) {
                setArticleList(response.data);
            }
        });
    }

    return (
        <div className={styles.main_stuff}>
            <Menubar /> {/* 좌측 나브 바 */}
            <div>
                <div>
                    {" "}
                    {/* 상단 나브 바*/}
                    <TopNav pageIcon={pageIconAddress} pageTitle={pageTitleText} />
                </div>

                <div id={styles.search_box}>
                    {" "}
                    {/* 검색창 */}
                    <input name="keyword" onChange={handleChange} id={styles.search_input} placeholder="검색어를 입력하세요" />
                    <button id={styles.search_button} onClick={searchWord}>
                        <img id={styles.search_icon} src="../media/search.png" alt="search 돋보기" />
                    </button>
                </div>

                <div className={styles.introData}>
                    <div className={styles.wordcloud}>
                        {" "}
                        {/* 워드 클라우드 */}
                        <img id={styles.wordcloud_png} src="../media/wordcloud_sample.png" alt="워드 클라우드" />
                    </div>

                    <div className={styles.donutChartContainer}>
                        <h1 id={styles.chart_title}>도넛 그래프</h1>
                        <DonutChart />
                    </div>
                </div>

                <NewsList data={articleList} />
            </div>
        </div>
    );
};

export default NewsListPage;
