//{/* 커스텀 대시보드 상세 페이지  */}

import React from 'react';

import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import styles from '../css/chartDetail.module.css';
import ChartList from '../components/ChartList';
import HashTag from '../components/HashTag';
import Menubar from '../components/Menubar';
import { Link } from 'react-router-dom';
import ChartCard from '../components/ChartCard';
import NewsList from '../components/NewsList';

// import PowerBIEmbed from '../components/PowerBIEmbed'; // PowerBIComponent.js 파일 경로에 맞게 수정



const ChartDetailPage = () => {

  //* #검색어
  const reportId1 = "99fc4531-73f3-4bda-b8f9-ef2d9948d577";
	const embedUrl1 = "https://app.powerbi.com/reportEmbed?reportId=30a825e3-341b-40a9-9466-ae3763719b5e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d";
	const accessToken1 = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYzMwZmViZWUtNzU4Yy00ZGUxLWJhNTEtYzdmZjNhNWE3MGM2LyIsImlhdCI6MTY5MDk4MDQ0NywibmJmIjoxNjkwOTgwNDQ3LCJleHAiOjE2OTA5ODU3MjAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFLeEsrOGdKck5yazdnQWw3VCt4SG1pRU5HeDA4a29IdlJ5L3AyTFI5dWI1TUpvRCtLSTRUNVZkME1rQ21tb3VQIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImlwYWRkciI6IjE3NS4xMTUuMjMzLjE3NiIsIm5hbWUiOiJEYW5pZWwgRmFybGV5Iiwib2lkIjoiMWE0YjM0MWEtNTlhOC00YjFiLTgzMjMtNzc2MzU2ZTNmNzc3IiwicHVpZCI6IjEwMDMyMDAwRkNFQzc1NkYiLCJyaCI6IjAuQVJNQTd1c1B3NHgxNFUyNlVjZl9PbHB3eGdrQUFBQUFBQUFBd0FBQUFBQUFBQURhQU1jLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IllZLVRQamF1a0JBU2Flc3JxdDUzS1R6NXloR25nVWlyQ2tiUlROalBCWUEiLCJ0aWQiOiJjMzBmZWJlZS03NThjLTRkZTEtYmE1MS1jN2ZmM2E1YTcwYzYiLCJ1bmlxdWVfbmFtZSI6IksxMjY1MEBvZmZpY2UzNjUuYmx1ZSIsInVwbiI6IksxMjY1MEBvZmZpY2UzNjUuYmx1ZSIsInV0aSI6IkRkVWJkNFRvVGtPQTBoTERMZmhVQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.Voak5PXKWuv6IqtjbsTZVC099sAR8z8LXmAWRgmnyCktmoGwZXxLmIkweU4o7DRRs8I2cMU-x6ey-Q16bsswEemUM14TNAWNENnGKmHVvgo_4XajMJJ1JrFPU-HM9ji-EX3F37aZrVw9re0-FnAik6dn8EDtqjhUWb7nw3Anf81DEfR09pH_4rwcN1-zQimDlcR5IhOFcbX2a6uUUJo7PWBNsdGZ26-fJWk0JfCIqBPNz3IbjSoYeK704zFzcG4AhEUesw0T7ZU6euweZdbrjVY_GQIjcD3OIE3SA4a0yiDQkfOFbYEy2UslPn9G-dbQ1oZaSXEjM1UVisqqYAhGDA';

	const chartList = [{title: "제목1", reportId: reportId1, embedUrl: embedUrl1, accessToken: accessToken1}]

  const tagList = ["매출", "병원", "응급실", "상급병원"]

  const TagList = tagList.map((data, index) => {
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

  
  
  return (
    <div className={styles.detailRootTag}>
      <Menubar /> {/* <img src="../media/nav.png" alt="좌측 나브 바" />  */}
      
      <div>
        <div className={styles.upperNav}> {/* 상단 나브 바*/}
          <img src="../media/dashboardpage_nav.png" alt="상단 나브 바" id={styles.upperNavPng}  /> 
          <div > {/* 대시보드 항목 */}
            <p id={styles.upperNavInfo} >대시보드 1</p> {/* 기본 대시보드 1 */}
            <img src="../media/more_dashboard.png" alt="대시보드 추가 버튼" id={styles.upperNavPlus} />
            <p id={styles.upperNavUserName}>User Name</p> {/* 사용자 닉네임 */}
            <img src="../media/Entrepreneur.png" alt="유저 직군 이미지" id={styles.upperNavUserPng} /> 
          </div>
        </div>

        <div>     {/* 상세 정보 */}
          <div className={styles.detailTag}> {/* 예시 해쉬태그# 검색어 */}
            {TagList}
          </div>
          
          <div>  {/* 차트 제목 title  */}
            <p className={styles.detailTitle}>서울 지역 병원 매출 추이 </p> {/* 차트 제목 title  */}
          </div>
                                
          <div> {/* 차트 설명 content */}
            <p className={styles.detailContent}>서울지역 병원 매출 추이에 대한 그래프입니다.</p>
          </div>

          <div >    {/* 데이터 출처   */}
            <p className={styles.detailSource}>데이터 출처:심평원(출처) </p>
          </div>
        </div>

        <div> {/* powerbi 컴포턴트 불러오기*/}
          {/* <ChartCard data={ChartCard} /> */}
        </div>

        {/* <div>
          <PowerBIEmbed />
        </div> */}

          <div class="reportContainer"> {/* powerbi 사이즈 조정 */}
            <PowerBIEmbed
              embedConfig = {{
                          type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                          id: "30a825e3-341b-40a9-9466-ae3763719b5e",  //* '<Report Id>',
                          
                          embedUrl: "https://app.powerbi.com/reportEmbed?reportId=30a825e3-341b-40a9-9466-ae3763719b5e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",                          
                          accessToken:'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYzMwZmViZWUtNzU4Yy00ZGUxLWJhNTEtYzdmZjNhNWE3MGM2LyIsImlhdCI6MTY5MTE5MTMwNCwibmJmIjoxNjkxMTkxMzA0LCJleHAiOjE2OTExOTU0MzYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFoaDVLRU1iUU5rbkNtMW1YVFphOWpkejNIclpDV2hEM01PcXY2REJqbno5RzhyTGszTVl3N014U09KTTZxOW9tIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImlwYWRkciI6IjE3NS4xMTUuMjMzLjE3NiIsIm5hbWUiOiJEYW5pZWwgRmFybGV5Iiwib2lkIjoiMWE0YjM0MWEtNTlhOC00YjFiLTgzMjMtNzc2MzU2ZTNmNzc3IiwicHVpZCI6IjEwMDMyMDAwRkNFQzc1NkYiLCJyaCI6IjAuQVJNQTd1c1B3NHgxNFUyNlVjZl9PbHB3eGdrQUFBQUFBQUFBd0FBQUFBQUFBQURhQU1jLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IllZLVRQamF1a0JBU2Flc3JxdDUzS1R6NXloR25nVWlyQ2tiUlROalBCWUEiLCJ0aWQiOiJjMzBmZWJlZS03NThjLTRkZTEtYmE1MS1jN2ZmM2E1YTcwYzYiLCJ1bmlxdWVfbmFtZSI6IksxMjY1MEBvZmZpY2UzNjUuYmx1ZSIsInVwbiI6IksxMjY1MEBvZmZpY2UzNjUuYmx1ZSIsInV0aSI6IlZackZxM2R6eGtpYldBVnlTUjlFQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.sgenopQqBJxb15vY0iPYAnqkMWgaiFgCRL0S7LUkHqCIpuE246TtfyO4UQVrsVFcSfOloiIr-DM7N3i-T0rzWFyt9UbV9_a9Tf7k4_vSE97zKD2pVdvg8fKFAqM_uHpKF_WpyDYaQdU9Q83WTkO-XMYFPDYbMF2-kEX5uNNuTfLEwYXVT-bFztzk-sDWvDdhA0yLul23qCu-ow2V_t-VOXuFbeLkl4Pe6UhCEijDY3w0h6qmVR0GkM9UA7oyCw6ogkqzV6kMqqR_KkdxssOXjwR0mcNGs6eQxZwXsx7oFx27jSRStv6uyUmoApBjkURP1OF4b4FJ5MW1b1BcT1n76g',
                          //* 1시간? 간격 갱신 필요 ㄷㄷ

                          tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
                          settings: {
                            layoutType: models.LayoutType.Custom,
                            customLayout: {
                              displayOption: models.DisplayOption.fitToWidth
                            },
                            panes: {
                              filters: {
                                expanded: false,
                                visible: false
                              }
                            },
                            // background: models.BackgroundType.Transparent,
              },
              
            }}
            
            

                        eventHandlers = {
                          new Map([
                            ['loaded', function () {console.log('Report loaded');}],
                            ['rendered', function () {console.log('Report rendered');}],
                            ['error', function (event) {console.log(event.detail);}],
                            ['visualClicked', () => console.log('visual clicked')],
                            ['pageChanged', (event) => console.log(event)],
                          ])
                        }

                        cssClassName = { "Embed_container" }

                        getEmbeddedComponent = { (embeddedReport) => {
                          // window.report = embeddedReport;
                          window.Report = embeddedReport;
                        }}
                      />
        </div>
        
          <div className={styles.detailNews}> {/* 예시 뉴스 정보 */}
            <NewsList data={newsList} />
          </div>
        </div>

      </div>
      
  );
};

export default ChartDetailPage;