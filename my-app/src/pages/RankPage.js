//{/* 데이터 활용 차트 순위 목록 페이지  */}

import React, { useState, useEffect } from "react";
import styles from "../css/rank.module.css";
import Menubar from "../components/Menubar";
import ChartList from "../components/ChartList";
import TopNav from "../components/TopNav";
import axios from "axios";

//  상단 나브 바
const pageIconAddress = "../media/ran_icon_title.jpg";
const pageTitleText = '데이터 활용 차트 순위 목록';

const RankPage = () => {
    const [chartList1, setChartList1] = useState([]);
    const [chartList2, setChartList2] = useState([]);
    const [chartList3, setChartList3] = useState([]);
    const [chartList4, setChartList4] = useState([]);
    
    useEffect(() => {
        axios.get("api/stat/rank/사업자").then((response) => {
            console.log(response.data);
            setChartList1(response.data);
        });
        axios.get("api/stat/rank/의료진").then((response) => {
            console.log(response.data);
            setChartList2(response.data);
        });
        axios.get("api/stat/rank/환자").then((response) => {
            console.log(response.data);
            setChartList3(response.data);
        });
        axios.get("api/stat/rank/기타").then((response) => {
            console.log(response.data);
            setChartList4(response.data);
        });
    }, []);




    return (
        <>
            {/* 좌측 나브 바 */}
            <Menubar />

            <div className={styles.main}>
                <div>
                    {" "}
                    {/* 상단 나브 바*/}
                    <TopNav pageIcon={pageIconAddress} pageTitle={pageTitleText} />

                </div>

                <div id={styles.chart_body}>
                    {" "}
                    {/* 4가지 항목별 직군 */}
                    <div className={styles.group_box}>
                        {" "}
                        {/* 의료계 사업자 순위 목록 */}
                        <div className={styles.job_group}>
                            {" "}
                            {/* 목차 */}
                            <img
                                src="../media/Entrepreneur.png"
                                alt="의료계 사업자 이미지"
                                className={styles.job_img}
                            />
                            <h1>의료계 사업자</h1>
                        </div>
                        <div>
                            {" "}
                            {/* powerbi 전체 묶음 */}
                            <ChartList data={chartList1} />
                        </div>
                    </div>
                    <div className={styles.group_box}>
                        {" "}
                        {/* 의료진 순위 목록 */}
                        <div className={styles.job_group}>
                            {" "}
                            {/* 목차 */}
                            <img
                                src="../media/Medical_staff.png"
                                alt="의료진 이미지"
                                className={styles.job_img}
                            />
                            <h1>의료진</h1>
                        </div>
                        <div>
                            {" "}
                            {/* powerbi 전체 묶음 */}
                            <ChartList data={chartList2} />
                        </div>
                    </div>
                    <div className={styles.group_box}>
                        {" "}
                        {/* 환자 순위 목록 */}
                        <div className={styles.job_group}>
                            {" "}
                            {/* 목차 */}
                            <img
                                src="../media/Patient.png"
                                alt="환자 이미지"
                                className={styles.job_img}
                            />
                            <h1>환자</h1>
                        </div>
                        <div>
                            {" "}
                            {/* powerbi 전체 묶음 */}
                            <ChartList data={chartList3} />
                        </div>
                    </div>
                    <div className={styles.group_box}>
                        {" "}
                        {/* 기타 순위 목록 */}
                        <div className={styles.job_group}>
                            {" "}
                            {/* 목차 */}
                            <img
                                src="../media/Other.png"
                                alt="기타 이미지"
                                className={styles.job_img}
                            />
                            <h1>기타</h1>
                        </div>
                        <div>
                            {" "}
                            {/* powerbi 전체 묶음 */}
                            <ChartList data={chartList4} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RankPage;
