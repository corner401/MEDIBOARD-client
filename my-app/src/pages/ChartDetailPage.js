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
  
  //* #검색어
  const reportId1 = "99fc4531-73f3-4bda-b8f9-ef2d9948d577";
	const embedUrl1 = "https://app.powerbi.com/reportEmbed?reportId=30a825e3-341b-40a9-9466-ae3763719b5e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d";
	const accessToken1 = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYzMwZmViZWUtNzU4Yy00ZGUxLWJhNTEtYzdmZjNhNWE3MGM2LyIsImlhdCI6MTY5MDk4MDQ0NywibmJmIjoxNjkwOTgwNDQ3LCJleHAiOjE2OTA5ODU3MjAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFLeEsrOGdKck5yazdnQWw3VCt4SG1pRU5HeDA4a29IdlJ5L3AyTFI5dWI1TUpvRCtLSTRUNVZkME1rQ21tb3VQIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImlwYWRkciI6IjE3NS4xMTUuMjMzLjE3NiIsIm5hbWUiOiJEYW5pZWwgRmFybGV5Iiwib2lkIjoiMWE0YjM0MWEtNTlhOC00YjFiLTgzMjMtNzc2MzU2ZTNmNzc3IiwicHVpZCI6IjEwMDMyMDAwRkNFQzc1NkYiLCJyaCI6IjAuQVJNQTd1c1B3NHgxNFUyNlVjZl9PbHB3eGdrQUFBQUFBQUFBd0FBQUFBQUFBQURhQU1jLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IllZLVRQamF1a0JBU2Flc3JxdDUzS1R6NXloR25nVWlyQ2tiUlROalBCWUEiLCJ0aWQiOiJjMzBmZWJlZS03NThjLTRkZTEtYmE1MS1jN2ZmM2E1YTcwYzYiLCJ1bmlxdWVfbmFtZSI6IksxMjY1MEBvZmZpY2UzNjUuYmx1ZSIsInVwbiI6IksxMjY1MEBvZmZpY2UzNjUuYmx1ZSIsInV0aSI6IkRkVWJkNFRvVGtPQTBoTERMZmhVQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.Voak5PXKWuv6IqtjbsTZVC099sAR8z8LXmAWRgmnyCktmoGwZXxLmIkweU4o7DRRs8I2cMU-x6ey-Q16bsswEemUM14TNAWNENnGKmHVvgo_4XajMJJ1JrFPU-HM9ji-EX3F37aZrVw9re0-FnAik6dn8EDtqjhUWb7nw3Anf81DEfR09pH_4rwcN1-zQimDlcR5IhOFcbX2a6uUUJo7PWBNsdGZ26-fJWk0JfCIqBPNz3IbjSoYeK704zFzcG4AhEUesw0T7ZU6euweZdbrjVY_GQIjcD3OIE3SA4a0yiDQkfOFbYEy2UslPn9G-dbQ1oZaSXEjM1UVisqqYAhGDA';

  const TagList = tagList && tagList.map((data, index) => {
    return <HashTag tagName={data} key={index} className={styles.detailTagList}  />
  })

//* 뉴스 
  const newsTitle1 = "oo버섯 사용 결과... “△△ 암 개선에 효과적”";
  const newsContents1 = "ㅁㅁ대 약학과 ◎◎◎교수, 23일 등재된 논문에 따르면,,"; 
  const newsAuthor1 = "YTS";
  const newsDate1 = "2024/02/14";

  const newsTitle2 = "oo버섯 사용 결과... “△△ 암 개선에 효과적”";
  const newsContents2 = "ㅁㅁ대 약학과 ◎◎◎교수, 23일 등재된 논문에 따르면,,"; 
  const newsAuthor2 = "YTS";
  const newsDate2 = "2024/02/14";

  const newsTitle3 = "oo버섯 사용 결과... “△△ 암 개선에 효과적”";
  const newsContents3 = "ㅁㅁ대 약학과 ◎◎◎교수, 23일 등재된 논문에 따르면,,"; 
  const newsAuthor3 = "YTS";
  const newsDate3 = "2024/02/14";

  const newsList = [{ newsTitle: newsTitle1, newsContents: newsContents1, newsAuthor: newsAuthor1, newsDate: newsDate1 },
                    { newsTitle: newsTitle2, newsContents: newsContents2, newsAuthor: newsAuthor2, newsDate: newsDate2 },
                    { newsTitle : newsTitle3, newsContents : newsContents3, newsAuthor : newsAuthor3, newsDate : newsDate3}]
  
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