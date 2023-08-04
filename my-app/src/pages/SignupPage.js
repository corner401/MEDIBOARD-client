import React from "react";
import styles from "../css/signup.module.css";

const SignupPage = () => {
    return (
        <div className={styles.page_container}>
            <div className={styles.login_stuff}>
                <div className={styles.overlay}></div> {/*  반투명 배경 블록 */}
                <img
                    src="./media/logo.png"
                    alt="logo"
                    id={styles.logo_img}
                />{" "}
                {/* 로고 이미지 */}
                <div id={styles.signup_stuff}>
                    <h1 id={styles.service_name}> MEDIBOARD </h1>
                    <h2 id={styles.sign_up}>Sign Up</h2>
                    <div id={styles.box}>Email</div>
                    <div id={styles.box}>User Name</div>
                    <div id={styles.box}>Password</div>
                    <div id={styles.box}>Rewrite Password </div>
                </div>
                <div id={styles.job_check}>
                    <img
                        src="./media/Entrepreneur_check.png"
                        alt="사업가"
                        id="job_1"
                    />{" "}
                    {/* 로고 이미지 */}
                    <img
                        src="./media/Medical_staff_check.png"
                        alt="의료진"
                        id="job_2"
                    />{" "}
                    {/* 로고 이미지 */}
                    <img
                        src="./media/Patient_check.png"
                        alt="환자"
                        id="job_3"
                    />{" "}
                    {/* 로고 이미지 */}
                    <img
                        src="./media/Other_check.png"
                        alt="기타"
                        id="job_4"
                    />{" "}
                    {/* 로고 이미지 */}
                </div>
                <div id={styles.box_button}>Sign Up </div>
            </div>
        </div>
    );
};

export default SignupPage;
