//* 기존
import React, { useState } from "react";
import ChartBox from "./ChartBox";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "../css/chartCard.module.css";

const ChartCard = (props) => {
    const data = props.data;
    const reportId = data.reportId;
    const embedUrl = data.embedUrl;
    const accessToken = data.accessToken;

    //즐겨찾기 이미지 상태 관리를 위한 useState
    const [starState, setStarState] = useState("off"); //초기 상태 - off

    // 즐겨찾기 이미지를 토글하는 함수
    // const toggleStar = () => {
    //     setStarState((prevState) => (prevState === "off" ? "on" : "off"));
    //     console.log("star clicked");
    // };

    const toggleStar = async () => {
        if (starState === "off") {
            setStarState("on");
            const apiUrl = "/api/star";
            const requestBody = {
                user_id: "someUserId", // 변경 필요
                statistics_id: data.id,
            };

            axios
                .post(apiUrl, requestBody)
                .then((response) => {
                    console.log("API POST 요청 성공:", response.data);
                })
                .catch((error) => {
                    console.error("API POST 요청 실패:", error);
                });
        } else {
            setStarState("off");
            const deleteUrl = `/api/star/${data.id}`; //url 확인 필요

            axios
                .delete(deleteUrl)
                .then((response) => {
                    console.log("API DELETE 요청 성공:", response.data);
                })
                .catch((error) => {
                    console.error("API DELETE 요청 실패:", error);
                });
        }
    };

    return (
        <div className={styles.cardContainer} state={{ data: data && data.id }}>
            <div className={styles.title_container}>
                <Link className={styles.title} to={`/chart/detail`} state={{ data: data && data.id }}>
                    {data.title}
                </Link>
                <button className={styles.star_button} onClick={toggleStar}>
                    <img className={styles.star_icon} src={require(`../media/star_${starState}.png`)} alt={starState === "off" ? "즐겨찾기 해제됨" : "즐겨찾기 추가됨"} />
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

export default ChartCard;

//* 드래그엔드롭 1
// import React from 'react';
// import ChartBox from './ChartBox';
// import { Link } from 'react-router-dom';
// import styles from '../css/chartCard.module.css';

// const ChartCard = (props) => {
// 	const data = props.data;
//   const reportId = data.reportId;
// 	const embedUrl = data.embedUrl;
//   const accessToken = data.accessToken;
//   // const handleDragStart = (e) => {      // 드래그엔드롭
//   //   e.dataTransfer.setData("text/plain", JSON.stringify(data));
//   // }

//   return (
//     <Link className={styles.cardContainer} to={`/chart/detail`} state={{ data: data && data.id }}>
//       <div className={styles.title_container}>
//         <div className={styles.title}>{data.title}</div>
//         <button className={styles.star_button}>
//           <img className={styles.star_icon} src={require("../media/star_off.png")} alt="즐겨찾기 해제됨"/>
//         </button>
//       </div>

//       <div id={styles.chartContainer}
//         draggable="true" // 드래그 가능하도록 설정
//         onDragStart={handleDragStart}  // 드래그 가능하도록 설정
//       >

//           {/* powerbi 보고서  > 파일 > 보고서 포함> 웹에 게시 > 웹사이트 또는 포털*/}
//           <iframe id={styles.iframe} title={data.title} width="1000" height="700" src={data.src}  frameborder="0" allowFullScreen="true"></iframe>

//       </div>

//       {/* <ChartBox reportId={reportId} embedUrl={embedUrl} accessToken={accessToken} /> */}
//     </Link>
//   );
// };

// export default ChartCard;

//* 드래그엔 드롭 2
// import React from 'react';
// import styles from '../css/chartCard.module.css';

// const ChartCard = (props) => {
//     const { data, onDragStart, index } = props;

//     return (
//         <div
//             className={styles.cardContainer}
//             draggable="true"
//             onDragStart={(e) => onDragStart(e, index)}
//         >
//           <iframe id={styles.iframe} title={data.title} width="1000" height="700" src={data.src}  frameborder="0" allowFullScreen="true"></iframe>
//         </div>
//     );
// };

// export default ChartCard;

//* 드래그엔드롭 3
// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from '../css/chartCard.module.css';

// const ChartCard = (props) => {
//   const { data, onDragStart, index } = props;

//   return (
//     <div
//       className={styles.cardContainer}
//       draggable="true"
//       onDragStart={(e) => onDragStart(e, index)}
//     >
//       <Link to={`/chart/detail`} state={{ data: data && data.id }}>
//         <div className={styles.title_container}>
//           <div className={styles.title}>{data.title}</div>
//           <button className={styles.star_button}>
//             <img className={styles.star_icon} src={require("../media/star_off.png")} alt="즐겨찾기 해제됨"/>
//           </button>
//         </div>

//         <div id={styles.chartContainer}>
//           <iframe id={styles.iframe} title={data.title} width="1000" height="700" src={data.src} frameBorder="0" allowFullScreen="true"></iframe>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default ChartCard;
