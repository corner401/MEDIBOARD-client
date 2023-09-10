//{/* 커스텀 대시보드 상세 페이지  */}

import React, { useEffect, useState } from 'react';
import styles from '../css/chartDetail.module.css';
import HashTag from '../components/HashTag';
import Menubar from '../components/Menubar';
import { useLocation } from 'react-router-dom';
import NewsList from '../components/NewsList';
import TopNav from "../components/TopNav";
import axios from 'axios';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';


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
        
        <div> {/* 상단 나브 바 */}
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

            {/* Power BI 사이즈 조정 중
            <div id={styles.reportContainer}> 
                
              <PowerBIEmbed
                embedConfig={{
                                type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                                id: "30a825e3-341b-40a9-9466-ae3763719b5e",  //* '<Report Id>',
                                
                                embedUrl: "https://app.powerbi.com/reportEmbed?reportId=30a825e3-341b-40a9-9466-ae3763719b5e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",                          
                                accessToken:'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYzMwZmViZWUtNzU4Yy00ZGUxLWJhNTEtYzdmZjNhNWE3MGM2LyIsImlhdCI6MTY5MTU1MzM4MywibmJmIjoxNjkxNTUzMzgzLCJleHAiOjE2OTE1NTg0MzAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFLRlgzU0h5eFpqbk12ZjA1bjNOK1ZDajR4Tmh2WnRPNXc5Y2Vqcnh5QnJVMTdmS0xOYkxlMlZRUVptTFFqM3htIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImlwYWRkciI6IjE3NS4xMTUuMjMzLjE3NiIsIm5hbWUiOiJEYW5pZWwgRmFybGV5Iiwib2lkIjoiMWE0YjM0MWEtNTlhOC00YjFiLTgzMjMtNzc2MzU2ZTNmNzc3IiwicHVpZCI6IjEwMDMyMDAwRkNFQzc1NkYiLCJyaCI6IjAuQVJNQTd1c1B3NHgxNFUyNlVjZl9PbHB3eGdrQUFBQUFBQUFBd0FBQUFBQUFBQURhQU1jLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IllZLVRQamF1a0JBU2Flc3JxdDUzS1R6NXloR25nVWlyQ2tiUlROalBCWUEiLCJ0aWQiOiJjMzBmZWJlZS03NThjLTRkZTEtYmE1MS1jN2ZmM2E1YTcwYzYiLCJ1bmlxdWVfbmFtZSI6IksxMjY1MEBvZmZpY2UzNjUuYmx1ZSIsInVwbiI6IksxMjY1MEBvZmZpY2UzNjUuYmx1ZSIsInV0aSI6Ikh5cWlma3owV0VTWXdlTDBKZzBZQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.G5Yvh2mGE-Rvr364CuPNGSKj0utwtaXRFecXC1ht6jjaiYslnWs_-YwklyJKEwecZKZTdaiDQAWh7ub4NrSqX0wO2OVJX5hWV7ewBbh2ggo4ZI3pxp9Gh1YmE6DaHvLYqUfCO9-RQXjI38HM3eHGqKPInuAhTtuFRbGAD-e5U5_yA5Dx7uC-5YenE3-Poykf16Cg4vBn9cW8wn3IgK-fcOKsL3s4MWNy4TvH5Bd0AxEhTjkr5G6C9kgQUAbaEUpOWwUiEtlVwpjxmqT2PWqt1SFpAN4xdPnap2NU2gzB2CzY6CKaU8KNOF70QJ6E4lWMTbuBmRqfjIKnmdK-A3dM5g',
                                //* 1시간? 간격 갱신 필요 ㄷㄷ

                                // accessToken: responseConfig.EmbedToken,

                                tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
                                settings: {
                                  layoutType: models.LayoutType.Custom,
                                  customLayout: {
                                    displayOption: models.DisplayOption.FitToPage, 
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
            */}

            <div id={styles.chartContainer}>
          
              {/* powerbi 보고서  > 파일 > 보고서 포함> 웹에 게시 > 웹사이트 또는 포털*/}
              <iframe id={styles.iframe} title={statistics.title} width="1000" height="700" src={statistics.src}  frameborder="0" allowFullScreen="true"></iframe>

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