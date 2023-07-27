import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PowerBIEmbed
          embedConfig = {{
            type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
            id: "99fc4531-73f3-4bda-b8f9-ef2d9948d577",  //* '<Report Id>',
            
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=30a825e3-341b-40a9-9466-ae3763719b5e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",//'<Embed Url>',
  
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYzMwZmViZWUtNzU4Yy00ZGUxLWJhNTEtYzdmZjNhNWE3MGM2LyIsImlhdCI6MTY4OTk0MDkwMywibmJmIjoxNjg5OTQwOTAzLCJleHAiOjE2ODk5NDY0NjcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFXYmR2ZTlQamVCZllFczJTeERIamNGaFFuY01ONDAxRVV2NE5jdGhCM1dzeE5oNmx4bWIxcWJqaGFwSy9kcWVzIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImlwYWRkciI6IjE3NS4xMTUuMjMzLjE3NiIsIm5hbWUiOiJEYW5pZWwgRmFybGV5Iiwib2lkIjoiMWE0YjM0MWEtNTlhOC00YjFiLTgzMjMtNzc2MzU2ZTNmNzc3IiwicHVpZCI6IjEwMDMyMDAwRkNFQzc1NkYiLCJyaCI6IjAuQVJNQTd1c1B3NHgxNFUyNlVjZl9PbHB3eGdrQUFBQUFBQUFBd0FBQUFBQUFBQURhQU1jLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IllZLVRQamF1a0JBU2Flc3JxdDUzS1R6NXloR25nVWlyQ2tiUlROalBCWUEiLCJ0aWQiOiJjMzBmZWJlZS03NThjLTRkZTEtYmE1MS1jN2ZmM2E1YTcwYzYiLCJ1bmlxdWVfbmFtZSI6IksxMjY1MEBvZmZpY2UzNjUuYmx1ZSIsInVwbiI6IksxMjY1MEBvZmZpY2UzNjUuYmx1ZSIsInV0aSI6IlpkUVRuNWpjYkV1clI1aUJDSjZlQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.JHpe328bUYVY8Lz64RutimFCP0STk1LD-YNCOxlES1hm36F8_yp_eiI4R-PqsNvchaanwyVq0VpgLVRKoA-2N8z8nx1UwSbZ1XLG6ZG1YS-3FkUA1DaPmdNDHemhVOJVk7tEnxCo7DGAkqCdUOejjpXzZJfTS5htnxnSgtDcGTFyKlF2C0urNGIWEczkdiNSOxYJWxX5Ig4wuPzRVIc5dk81OiIujhcdX4XD6HDhh-97MGsPj_mUck8NUB5zexQnib7kUtPLLvo-WFX-fPZNpT1bYFemCjDp7uknSkGWhDbfB7hZ5skMSTvD9j04WRs8j3f-YfPtUD9HYUHU8qe7KA',
          //* 1시간? 간격 갱신 필요 ㄷㄷ

            tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true
                }
              },
              background: models.BackgroundType.Transparent,
            }
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

          cssClassName = { "Embed-container" }

          getEmbeddedComponent = { (embeddedReport) => {
            // window.report = embeddedReport;
            window.Report = embeddedReport;
          }}
        />

        <PowerBIEmbed
          embedConfig = {{
            type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
            id: "30a825e3-341b-40a9-9466-ae3763719b5e",  //* '<Report Id>',
            
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=30a825e3-341b-40a9-9466-ae3763719b5e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
  
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYzMwZmViZWUtNzU4Yy00ZGUxLWJhNTEtYzdmZjNhNWE3MGM2LyIsImlhdCI6MTY4OTk0MDkwMywibmJmIjoxNjg5OTQwOTAzLCJleHAiOjE2ODk5NDY0NjcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFXYmR2ZTlQamVCZllFczJTeERIamNGaFFuY01ONDAxRVV2NE5jdGhCM1dzeE5oNmx4bWIxcWJqaGFwSy9kcWVzIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImlwYWRkciI6IjE3NS4xMTUuMjMzLjE3NiIsIm5hbWUiOiJEYW5pZWwgRmFybGV5Iiwib2lkIjoiMWE0YjM0MWEtNTlhOC00YjFiLTgzMjMtNzc2MzU2ZTNmNzc3IiwicHVpZCI6IjEwMDMyMDAwRkNFQzc1NkYiLCJyaCI6IjAuQVJNQTd1c1B3NHgxNFUyNlVjZl9PbHB3eGdrQUFBQUFBQUFBd0FBQUFBQUFBQURhQU1jLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IllZLVRQamF1a0JBU2Flc3JxdDUzS1R6NXloR25nVWlyQ2tiUlROalBCWUEiLCJ0aWQiOiJjMzBmZWJlZS03NThjLTRkZTEtYmE1MS1jN2ZmM2E1YTcwYzYiLCJ1bmlxdWVfbmFtZSI6IksxMjY1MEBvZmZpY2UzNjUuYmx1ZSIsInVwbiI6IksxMjY1MEBvZmZpY2UzNjUuYmx1ZSIsInV0aSI6IlpkUVRuNWpjYkV1clI1aUJDSjZlQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.JHpe328bUYVY8Lz64RutimFCP0STk1LD-YNCOxlES1hm36F8_yp_eiI4R-PqsNvchaanwyVq0VpgLVRKoA-2N8z8nx1UwSbZ1XLG6ZG1YS-3FkUA1DaPmdNDHemhVOJVk7tEnxCo7DGAkqCdUOejjpXzZJfTS5htnxnSgtDcGTFyKlF2C0urNGIWEczkdiNSOxYJWxX5Ig4wuPzRVIc5dk81OiIujhcdX4XD6HDhh-97MGsPj_mUck8NUB5zexQnib7kUtPLLvo-WFX-fPZNpT1bYFemCjDp7uknSkGWhDbfB7hZ5skMSTvD9j04WRs8j3f-YfPtUD9HYUHU8qe7KA',
          //* 1시간? 간격 갱신 필요 ㄷㄷ

            tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true
                }
              },
              background: models.BackgroundType.Transparent,
            }
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

          cssClassName = { "Embed-container" }

          getEmbeddedComponent = { (embeddedReport) => {
            // window.report = embeddedReport;
            window.Report = embeddedReport;
          }}
        />

      </header>
    </div>
  );
}

export default App;
