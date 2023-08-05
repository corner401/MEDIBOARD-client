import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "../css/TopNav.module.css";


const TopNav = ({ pageIcon, pageTitle }) => {

        return (
            <div class={styles.top_nav_root}>
                {" "}
                {/* 상단 나브 바*/}
                <div id={styles.menu_titlebar}>
                    <div id={styles.menu_left}>
                        <img src={ pageIcon } alt="페이지 아이콘" id={styles.menu_img}/>
                        <h2 id={styles.menu_title}> {pageTitle} </h2>
                    </div>
                    <div id={styles.menu_right}>    {/* 사용자 정보 */}
                        <h3 id={styles.user_name}>user name</h3>
                        <img src={require("../media/Entrepreneur.png")} alt="main_1" />
                    </div>
                </div>
            </div>
        );
    }



export default TopNav;