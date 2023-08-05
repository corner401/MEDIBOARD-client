import React from 'react';
import NewsCard from "./NewsCard"

const NewsList = (props) => {

  const data = props.data || null;  // 차트 배열

  const NewsList = data.map((data, index) => {
    return <NewsCard data={data} key={index} />;
  });

    return (
        <div>
            {NewsList}
        </div>
    );
};

export default NewsList;