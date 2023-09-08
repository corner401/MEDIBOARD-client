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
    // chart 불러오기
    const [chartList, setChartList] = useState([]);

    useEffect(() => {
        axios.get("api/stat/list").then((response) => {
            console.log(response.data);
            setChartList(response.data);
        });
    }, []);

    // keyword 검색
    const [keyword, setKeyword] = useState([]);

    function handleChange(e) {
        console.log(e.target.value);
        setKeyword(e.target.value);
    }

    function searchWord() {
        console.log("searchWord()");
        axios.get("/api/stat/list?keyword=" + keyword).then((response) => {
            if (response.data) {
                setChartList(response.data);
            }
        });
    }

    //enter 키를 통한 keyword 검색
    function handleKeyDown(e) {
        if (e.key === "Enter") {
            searchWord();
        }
    }

    // hashtag 검색

    //selected hashtag (선택된 태그 배열 보관)
    const [selectedTags, setSelectedTags] = useState([]);

    //hashtag 클릭 핸들러
    // function handleTagClick(tagValue) {
    //     console.log("HashTag Clicked: " + tagValue);

    //     //키워드로 api 요청
    //     axios.get("/api/stat/list?keyword=" + tagValue).then((response) => {
    //         if (response.data) {
    //             setChartList(response.data);
    //         }
    //     });

    //     // 선택된 태그를 상태에 추가 (이미 존재하는 태그는 추가하지 않음)
    //     if (!selectedTags.includes(tagValue)) {
    //         setSelectedTags((prevTags) => [...prevTags, tagValue]);
    //     }

    //     console.log("selectedTags :" + selectedTags);
    // }

    // ++ 누적 검색 api 요청
    //hashtag 클릭 핸들러 (수정)
    function handleTagClick(tagValue) {
        console.log("HashTag Clicked: " + tagValue);

        // 선택된 태그를 상태에 추가 (이미 존재하는 태그는 추가하지 않음)
        let updatedTags = selectedTags;
        if (!selectedTags.includes(tagValue)) {
            updatedTags = [...selectedTags, tagValue]; // Create a new array that includes the new tagValue
            setSelectedTags(updatedTags);
        }

        //selected_box 태그를 하나의 문자열로 연결
        const tagsAsString = updatedTags.join(","); // Use updatedTags instead of selectedTags

        console.log("HashTag Clicked~: " + tagsAsString);

        //연결된 문자열(키워드)로 api 요청
        axios.get("/api/stat/list?keyword=" + tagsAsString).then((response) => {
            if (response.data) {
                setChartList(response.data);
            }
        });

        console.log("요청된 api 키워드 :" + tagsAsString);
    }

    //태그 삭제 함수
    function removeTag(tagToRemove) {
        console.log("HashTag UnClicked: " + tagToRemove);

        //태그를 제거한 후 새로운 배열 생성
        const AfterCancelTags = selectedTags.filter((tag) => tag !== tagToRemove);
        setSelectedTags(AfterCancelTags);

        //selected_box 태그를 하나의 문자열로 재연결(삭제 후)
        const NewTagsAsString = AfterCancelTags.join(",");

        console.log("new TagStrings: " + NewTagsAsString);

        //연결된 문자열(키워드)로 api 요청
        axios.get("/api/stat/list?keyword=" + NewTagsAsString).then((response) => {
            if (response.data) {
                setChartList(response.data);
            }
        });

        console.log("삭제 후 요청된 api 키워드 :" + NewTagsAsString);
    }

    const tagList = ["의약품", "요양기관", "진료정보", "환자표본", "병원평가", "응급", "의료자원", "지역별", "위치정보", "실시간", "기간별", "약국"];

    const TagList = tagList.map((data, index) => {
        return <HashTag tagName={data} key={index} onTagClick={handleTagClick} />;
    });

    return (
        <>
            <Menubar />
            <div className={styles.main}>
                <TopNav pageIcon={pageIconAddress} pageTitle={pageTitleText} />

                <div id={styles.search_box}>
                    {" "}
                    {/* 검색창 */}
                    <input name="keyword" id={styles.search_input} placeholder="검색어를 입력하세요" onChange={handleChange} onKeyDown={handleKeyDown} />
                    <button id={styles.search_button} onClick={searchWord}>
                        <img id={styles.search_icon} src="../media/search.png" alt="search 돋보기" />
                    </button>
                </div>

                <div id={styles.tag_box}>
                    {/* 예시 해쉬태그# 검색어 */}

                    {TagList}
                </div>

                <div id={styles.selected_box}>
                    {/*선택된 해시태그 목록*/}
                    <h3 id={styles.tag_title}>태그 검색</h3>
                    {selectedTags.map((tag) => (
                        <div className={styles.box}>
                            {/* 배경 박스 */}
                            <div id={styles.content}>
                                <span className={styles.text} key={tag}>
                                    #{tag}
                                </span>
                                <button className={styles.cancel} onClick={() => removeTag(tag)}>
                                    X
                                </button>
                            </div>
                        </div>
                    ))}
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
