import React from 'react';
import styles from '../css/hashtag.module.css';

const HashTag = (props) => {
	const tagName = props.tagName;

  return (
    	<div className={styles.box}>{/* 배경 박스 */}
			<div className={styles.text}>#{tagName}</div>
		</div>
  );
};

export default HashTag;