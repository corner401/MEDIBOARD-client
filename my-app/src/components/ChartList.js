import React from "react";
import ChartCard from "./ChartCard";

const ChartList = (props) => {
    const data = props.data || null; // 차트 배열

    const ChartList = data.map((data, index) => {
        return <ChartCard data={data} key={index} />;
    });

    return <div>{ChartList}</div>;
};

export default ChartList;
