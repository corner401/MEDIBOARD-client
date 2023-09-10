//* 기존
import React from 'react';
import ChartBox from './ChartBox';
import { Link } from 'react-router-dom';
import styles from '../css/chartCard.module.css';

const ChartCard = (props) => {
	const data = props.data;
  const reportId = data.reportId;
	const embedUrl = data.embedUrl;
  const accessToken = data.accessToken;

  return (
    <Link className={styles.cardContainer} to={`/chart/detail`} state={{ data: data && data.id }}>
      <div className={styles.title_container}>
        <div className={styles.title}>{data.title}</div>
        <button className={styles.star_button}>
          <img className={styles.star_icon} src={require("../media/star_off.png")} alt="즐겨찾기 해제됨"/>
        </button>
      </div>
      
      <div id={styles.chartContainer}>
          
          {/* powerbi 보고서  > 파일 > 보고서 포함> 웹에 게시 > 웹사이트 또는 포털*/}
          <iframe id={styles.iframe} title={data.title} width="1000" height="700" src={data.src}  frameborder="0" allowFullScreen="true"></iframe>

        </div>
  
      {/* <ChartBox reportId={reportId} embedUrl={embedUrl} accessToken={accessToken} /> */}
    </Link>
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
