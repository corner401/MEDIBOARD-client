import React from 'react';
import ChartBox from './ChartBox';

const HashTag = (props) => {
	const tagName = props.tagName;

  return (
    <div> {/* 예시 해쉬태그# 검색어 예시 1 */}
    	<div>{/* 배경 박스 */}  </div>
    	<div>{/* 검색어 내용 */}
      	<p>#{tagName}</p>
    	</div>
    </div>

  );
};

export default HashTag;