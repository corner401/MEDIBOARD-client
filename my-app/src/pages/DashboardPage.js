//{/* 커스텀 대시보드 페이지  */}
import React, { useEffect, useState } from "react";
import styles from "../css/dashboard.module.css";
import ChartList from "../components/ChartList";
import Menubar from "../components/Menubar";
import TopNav from "../components/TopNav";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//* 상단 나브 바
const pageIconAddress = "../media/dashboard_icon_title.jpg";
const pageTitleText = "커스텀 대시보드";

//더미 데이터
const dummyChartList = [
    // ... 더미 데이터 리스트
    {
        id: 1,
        title: "응급병원 지역별 혈관촬영기 가용수",
        src: "https://app.powerbi.com/reportEmbed?reportId=ceb94d13-495b-4f7b-8ac1-3b8842cbdc57&autoAuth=true&ctid=fd09b2bc-9220-4c6b-8372-220b7bd51819",
    },
    {
        id: 3,
        title: "시군별/종별 총 의사 수",
        src: "https://app.powerbi.com/reportEmbed?reportId=d252b471-30c1-4ef4-ac6f-3af2e6bfa6cd&autoAuth=true&ctid=fd09b2bc-9220-4c6b-8372-220b7bd51819",
    },
    {
        id: 4,
        title: "지역별 총 의사수와 외과 전문의 수",
        src: "https://app.powerbi.com/reportEmbed?reportId=d25521c2-d9a4-4bd5-8484-33280560dca8&autoAuth=true&ctid=fd09b2bc-9220-4c6b-8372-220b7bd51819",
    },
    {
        id: 7,
        title: "요양기간별 의약품 수 및 사용금액",
        src: "https://app.powerbi.com/reportEmbed?reportId=60fca97c-fa6f-4542-a0e6-a6b9d91db0a2&autoAuth=true&ctid=fd09b2bc-9220-4c6b-8372-220b7bd51819",
    },
    {
        id: 2,
        title: "전국 약국 정보",
        src: "https://app.powerbi.com/reportEmbed?reportId=43215e06-cb12-41e9-bbe8-710658d720d3&autoAuth=true&ctid=fd09b2bc-9220-4c6b-8372-220b7bd51819",
    },
    {
        id: 8,
        title: "지역별 의약품 수량 및 사용금액",
        src: "https://app.powerbi.com/reportEmbed?reportId=85180d9b-94d9-499c-a847-366ff96f6b3c&autoAuth=true&ctid=fd09b2bc-9220-4c6b-8372-220b7bd51819",
    },
    {
        id: 5,
        title: "연도별 의약품 수량 및 사용금액",
        src: "https://app.powerbi.com/reportEmbed?reportId=9f151d8d-7e47-4e17-ab7d-8e4062b4375d&autoAuth=true&ctid=fd09b2bc-9220-4c6b-8372-220b7bd51819",
    },
];

const DummyChartCard = ({ data }) => {
    return (
        <div className={styles.cardContainer} state={{ data: data && data.id }}>
            <div className={styles.title_container}>
                <Link className={styles.title} to={`/chart/detail`} state={{ data: data && data.id }}>
                    {data.title}
                </Link>
                <button className={styles.star_button}>
                    <img className={styles.star_icon} src={require(`../media/star_on.png`)} alt={"즐겨찾기 추가됨"} />
                </button>
            </div>

            <Link id={styles.link_chart} to={`/chart/detail`} state={{ data: data && data.id }}>
                <div id={styles.chartContainer}>
                    {/* powerbi 보고서  > 파일 > 보고서 포함> 웹에 게시 > 웹사이트 또는 포털*/}
                    <iframe id={styles.iframe} title={data.title} width="800" height="700" src={data.src} frameborder="0" allowFullScreen="true"></iframe>
                </div>
            </Link>

            {/* <ChartBox reportId={reportId} embedUrl={embedUrl} accessToken={accessToken} /> */}
        </div>
    );
};

//* 대시보드 상세 정보
const DashboardPage = () => {
    const userId = useSelector((store) => store.userReducer.userId);
    const [pageNum, setPageNum] = useState(1);
    const [chartList, setChartList] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (userId == null) {
            navigate("/login");
        }

        const body = {
            userId: userId,
        };

        axios.post("api/users/dashboard/" + pageNum, body).then((response) => {
            console.log(response.data);
            setChartList(response.data.statList);
        });
    }, []);

    return (
        <>
            <Menubar />
            <div className={styles.main}>
                <div>
                    {" "}
                    {/* 상단 나브 바*/}
                    <TopNav pageIcon={pageIconAddress} pageTitle={pageTitleText} />
                </div>

                {/*불러온 데이터 대시보드에 띄우기*/}
                {/* <div>
                    {" "}
                    <ChartList data={chartList} />
                </div> */}

                {/* 더미 데이터로 차트 띄우기 */}
                <div>
                    {/* <h3>더미 데이터</h3> */}
                    {dummyChartList.map((chartData) => (
                        <DummyChartCard key={chartData.id} data={chartData} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default DashboardPage;
