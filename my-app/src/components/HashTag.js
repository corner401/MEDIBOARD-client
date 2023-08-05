import React from "react";
import styles from "../css/hashtag.module.css";
import { Link } from "react-router-dom";

const HashTag = (props) => {
    const tagName = props.tagName;

    return (
        <div className={styles.box}>
            {/* 배경 박스 */}
            <Link id={styles.tag_btn}>
                <div className={styles.text}>#{tagName}</div>
            </Link>
        </div>
    );
};

export default HashTag;
