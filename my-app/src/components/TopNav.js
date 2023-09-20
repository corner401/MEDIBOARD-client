import React, { useEffect, useState } from "react";
import styles from "../css/TopNav.module.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TopNav = ({ pageIcon, pageTitle }) => {
    const userId = useSelector((store) => store.userReducer.userId);
    const [email, setEmail] = useState();

    const navigate = useNavigate();

    // useEffect(() => {
    //     if (userId == null) {
    //         navigate("/login");
    //     }

    //     const body = {
    //         userId: userId,
    //     };

    //     axios.post("api/users/info", body).then((response) => {
    //         console.log(response.data);
    //         setEmail(response.data.email); // 백엔드 수정 필요할 듯
    //     });
    // }, []);

    useEffect(() => {
        if (userId != null) {
            const body = {
                userId: userId,
            };

            axios.post("api/users/info", body).then((response) => {
                console.log(response.data);
                setEmail(response.data.email); // 백엔드 수정 필요할 듯
            });
        }
    }, [userId]);

    return (
        <div className={styles.top_nav_root}>
            {" "}
            {/* 상단 나브 바*/}
            <div id={styles.menu_titlebar}>
                <div id={styles.menu_left}>
                    <img src={pageIcon} alt="페이지 아이콘" id={styles.menu_img} />
                    <h2 id={styles.menu_title}> {pageTitle} </h2>
                </div>
                <div id={styles.menu_right}>
                    {" "}
                    {/* 사용자 정보 */}
                    <h3 id={styles.user_name}>{email}</h3>
                    <img src={require("../media/Entrepreneur.png")} alt="main_1" />
                </div>
            </div>
        </div>
    );
};

export default TopNav;
