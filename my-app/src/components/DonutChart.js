// detail 페이지에서 드러낼 뉴스
// 도넛 컴포넌트를 불러옴 
import React from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  // 데이터 설정
  const data = {
    labels: ['의약품', '진료', '환자', '병원'],
    datasets: [
      {
        label: '# news tags',
        data: [10, 22, 50, 48],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // // 차트의 크기 설정
  // const options = {
  //   // plugins: {
  //   //   legend: {
  //   //     display: true,
  //   //     position: 'right',
  //   //   },
  //   //   tooltip: {
  //   //     enabled: true,
  //   //   },
  //   // },
  //   // maintainAspectRatio: false, // false로 설정하여 가로 및 세로 비율을 조절합니다.
  //   // aspectRatio: 1, // 가로세로 비율을 1로 유지
  //   scales: {
  //     x: {
  //       // type: 'linear',
  //       min: 0,
  //       max: 300, // 가로 크기를 원하는 픽셀 값으로 조절
  //     },
  //     y: {
  //       // type: 'linear',
  //       min: 0,
  //       max: 300, // 세로 크기를 원하는 픽셀 값으로 조절
  //     },
  //   },
  // };


  return (
    <>
      <Doughnut data={data} />
    </>
  );
  
};

export default DonutChart;
