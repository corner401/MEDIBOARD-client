import React from 'react';
import ChartBox from './ChartBox';

const ChartCard = (props) => {
	const data = props.data;
  const reportId = data.reportId;
	const embedUrl = data.embedUrl;
  const accessToken = data.accessToken;

  return (
    <div>
			<div>{data.title}</div>
      <ChartBox reportId={reportId} embedUrl={embedUrl} accessToken={accessToken} />
    </div>
  );
};

export default ChartCard;