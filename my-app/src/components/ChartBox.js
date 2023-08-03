import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

const ChartBox = (props) => {
  const type = 'report';
  const reportId = props.reportId || null;
	const embedUrl = props.embedUrl || null;
	const accessToken = props.accessToken || null;

  return (
    <div>
      <PowerBIEmbed
            embedConfig = {{
              type: type,   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
              id: reportId,  // '<Report Id>',
              embedUrl: embedUrl,// '<Embed Url>',
              accessToken: accessToken, // 1시간? 간격 갱신 필요 ㄷㄷ

              tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
              settings: {
                panes: {
                  filters: {
                    expanded: false,
                    visible: true
                  }
                },
                // background: models.BackgroundType.Transparent,
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
    </div>
  );
};

export default ChartBox;