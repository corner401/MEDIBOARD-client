//{/* 커스텀 대시보드 상세 페이지  */}

import React, { useEffect, useState } from 'react';
import styles from '../css/chartDetail.module.css';
import HashTag from '../components/HashTag';
import Menubar from '../components/Menubar';
import { useLocation } from 'react-router-dom';
import NewsList from '../components/NewsList';
import TopNav from "../components/TopNav";
import axios from 'axios';

const ChartDetailPage = () => {
  
  const location = useLocation();
  const statId = location.state.data;

  const [statistics, setStatistics] = useState();
  const [articleList, setArticleList] = useState([]);
  const [tagList, setTagList] = useState(["매출", "병원", "응급실", "상급병원"]);

  useEffect(() => {
    axios
    .get("/api/stat/detail/"+statId).then((response)=>{
      if (response.data) {
        console.log(response.data);
        setStatistics(response.data.statistics);
        setArticleList(response.data.articleList);
        
        // 해시태그 string을 list로 변환 (추후 백엔드 수정)
        let str = response.data.statistics.hashtag;
        let arr = str.split(",");
        setTagList(arr);
      }
    })
  }, []);
  
  const TagList = tagList && tagList.map((data, index) => {
    return <HashTag tagName={data} key={index} className={styles.detailTagList}  />
  })

//  상단 나브 바
  const pageIconAddress = "../media/dashboard_icon_title.jpg";
  const pageTitleText = '데이터 활용 차트 순위 목록';

  return (      
    <div>
      <div className={styles.detailRootTag}>
        {/* 좌측 나브 바 */}
        <Menubar /> 
        
        <div>
          {/* 상단 나브 바 */}
          <TopNav pageIcon={pageIconAddress} pageTitle={pageTitleText} />
          {/* <div > <p id={styles.upperNavInfo} >대시보드 1</p><img src="../media/more_dashboard.png" alt="대시보드 추가 버튼" id={styles.upperNavPlus} /></div>   */}
        </div>

        {statistics && (
          <div className={styles.pageContainer}>
            <div>     {/* 상세 정보 */}
              <div className={styles.detailTag}> {/* 예시 해쉬태그# 검색어 */}
                {TagList}
              </div>
                
              <div>  {/* 차트 제목 title  */}
                <p className={styles.detailTitle}>{statistics.title}</p> {/* 차트 제목 title  */}
              </div>
                                      
              <div> {/* 차트 설명 content */}
                <p className={styles.detailContent}>{statistics.content}</p>
              </div>

              <div >    {/* 데이터 출처   */}
                <p className={styles.detailSource}>데이터 출처: {statistics.source} </p>
              </div>
            </div>

            {/* powerbi 컴포넌트 불러오기*/}

            {/* <div> 
               <ChartCard data={ChartCard} />
            </div> */}

            {/* <div>
              <PowerBIEmbed />
            </div> */}

            <div id={styles.chartContainer}> {/* powerbi 사이즈 조정 */}
          
              {/* powerbi 보고서  > 파일 > 보고서 포함> 웹에 게시 > 웹사이트 또는 포털*/}
              <iframe title={statistics.title} width="1000" height="700" src="https://app.powerbi.com/reportEmbed?reportId=30a825e3-341b-40a9-9466-ae3763719b5e&autoAuth=true&ctid=c30febee-758c-4de1-ba51-c7ff3a5a70c6" frameborder="0" allowFullScreen="true"></iframe>

            </div>
      
            {/* 뉴스 정보 */}
            <div className={styles.newsContainer}>
              <div className={styles.subTitle}>관련 뉴스 기사</div>
              <div className={styles.detailNews}> 
                <NewsList data={articleList} /> 
              </div>
            </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default ChartDetailPage;