// detail 페이지에서 드러낼 뉴스
// 도넛 컴포넌트를 불러옴

import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChart = () => {
  // 데이터 설정
    const data = {
        labels: ['의약품', '진료', '환자', '병원'],
        datasets: [
            {
                data: [10, 22, 50, 48],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#33FF99'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#33FF99'],
            },
        ],
    };

    return (
        <div className="donut-chart">
            <Doughnut
                data={data}
                options={{
                    cutoutPercentage: 60, // 도넛 중앙에 빈 공간을 만듭니다.
                        legend: {
                            display: true,
                            position: 'right', // 범례 위치 설정
                        },
                    responsive: true,
                    maintainAspectRatio: false,
                }}
            />
        </div>
    );
};

export default DonutChart;
