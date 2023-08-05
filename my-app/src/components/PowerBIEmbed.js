//* 임시 테스트 
//! 다른 컴포넌트에서 불러와서 사용하지 말아요!

import React, { useEffect, useRef } from 'react';
import { models } from 'powerbi-client';
import { PowerBIEmbed } from 'powerbi-client-react';

const PowerBIComponent = () => {
  const embedContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (embedContainerRef.current) {
        const { clientWidth, clientHeight } = embedContainerRef.current;
        // Power BI 차트 크기를 부모 요소에 맞게 조정
        window.Report.setSize({ width: `${clientWidth}px`, height: `${clientHeight}px` });
      }
    };

    // 화면 크기 변경 시, Power BI 차트 크기 재조정
    window.addEventListener('resize', handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }} ref={embedContainerRef}>
      <PowerBIEmbed
        embedConfig={{
          type: 'report',
          id: "30a825e3-341b-40a9-9466-ae3763719b5e",  //* '<Report Id>',
                          
          embedUrl: "https://app.powerbi.com/reportEmbed?reportId=30a825e3-341b-40a9-9466-ae3763719b5e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
          accessToken:'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYzMwZmViZWUtNzU4Yy00ZGUxLWJhNTEtYzdmZjNhNWE3MGM2LyIsImlhdCI6MTY5MTE4NzU2MiwibmJmIjoxNjkxMTg3NTYyLCJleHAiOjE2OTExOTE4NDQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFrSkFZc1N0VEl1clRSRDNSbWp2c0dBYm05eDN3Y1FQVXJMZDdMVDRHeEUwdkJvL253TTRrcUJHUERyejJncEFpIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImlwYWRkciI6IjE3NS4xMTUuMjMzLjE3NiIsIm5hbWUiOiJEYW5pZWwgRmFybGV5Iiwib2lkIjoiMWE0YjM0MWEtNTlhOC00YjFiLTgzMjMtNzc2MzU2ZTNmNzc3IiwicHVpZCI6IjEwMDMyMDAwRkNFQzc1NkYiLCJyaCI6IjAuQVJNQTd1c1B3NHgxNFUyNlVjZl9PbHB3eGdrQUFBQUFBQUFBd0FBQUFBQUFBQURhQU1jLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IllZLVRQamF1a0JBU2Flc3JxdDUzS1R6NXloR25nVWlyQ2tiUlROalBCWUEiLCJ0aWQiOiJjMzBmZWJlZS03NThjLTRkZTEtYmE1MS1jN2ZmM2E1YTcwYzYiLCJ1bmlxdWVfbmFtZSI6IksxMjY1MEBvZmZpY2UzNjUuYmx1ZSIsInVwbiI6IksxMjY1MEBvZmZpY2UzNjUuYmx1ZSIsInV0aSI6IlpmNXJPaXZYZEVtWHhKZGpkSVliQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.cCIwJM6ZLML6O_FkJ8cuE5QDsZcOPHrmHcc_k38t8brK2xW4QuJkOUVnbO7v428xXVHHLxytv4DQyDWBtItjl7LOViFuEDA6lHK2xZnsY991mdlWJG6rq81_DQ1HhaNbaoBtbPGk-6FVGtFDAOebXLW8bUZofMU2h0qfWw349lCfAB0FHyteHdEbVYI9IPGycqkf1grX5nunBWyc2FJBdGRdxNQY8fl44NoWJIX42LEy3VNzFLxplkezVOZKnWZFV_qzHUO2QO48PhxEl1FAxoZsgYwAxZKBn-8OaIJ1kaTZgX3TFdjaE77o9ePbEy8g9LT5Lw_e3uFLONOVnFFJDQ',
          
          tokenType: models.TokenType.Aad,
          settings: {
            layoutType: models.LayoutType.Custom,
            customLayout: {
              displayOption: models.DisplayOption.FitToPage
            },
            panes: {
              filters: {
                expanded: false,
                visible: false
              }
            },
          },
        }}
        eventHandlers={{
          // 이벤트 핸들러 설정들...
        }}
        cssClassName="Embed-container"
        getEmbeddedComponent={(embeddedReport) => {
          window.Report = embeddedReport;
        }}
      />
    </div>
  );
};

export default PowerBIComponent;
