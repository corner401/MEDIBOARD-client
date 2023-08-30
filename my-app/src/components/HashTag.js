import React, { useState, useEffect } from "react";
import styles from "../css/hashtag.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const HashTag = (props) => {
    const tagName = props.tagName;

    return (
        <div className={styles.box} onClick={() => props.onTagClick(tagName)}>
            {/* 배경 박스 */}
            <button id={styles.tag_btn}>
                <div className={styles.text}>#{tagName}</div>
            </button>
        </div>
    );
};

export default HashTag;
