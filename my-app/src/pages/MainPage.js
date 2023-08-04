import React from "react";
import styles from "../css/main.module.css";

const MainPage = () => {
    return (
        <div className={styles.main_stuff}>
            <div className={styles.start_main}>
                <img
                    src="./media/main_logo.png"
                    alt="logo"
                    id={styles.logo_img}
                />
                <div id={styles.title}>MEDIBOARD</div>
                <div id={styles.title_info}>공공의료 데이터 분석 대시보드</div>
            </div>

            <div id={styles.info_1}>
                <img
                    src="./media/main_logo.png"
                    alt="main_1"
                    id={styles.img_1}
                />

                <div id={styles.desc_1}>
                    <img
                        src="./media/main_1.png"
                        alt="icon_1"
                        id={styles.icon_1}
                    />
                    <p>보건 데이터 종류 수</p>
                </div>
            </div>

            <div id={styles.info_2}>
                <div id={styles.desc_2}>
                    <img
                        src="./media/main_2.png"
                        alt="icon_2"
                        id={styles.icon_2}
                    />
                    <p>공공 데이터 수</p>
                </div>
                <img
                    src="./media/main_logo.png"
                    alt="main_2"
                    id={styles.img_2}
                />
            </div>

            <div id={styles.quick_link}>
                <h3 id={styles.link_title}>Quick Link</h3>
                <div id={styles.menu_link}>
                    <div className={styles.menu_box}>
                        <img
                            src="./media/dashboard_icon.png"
                            alt="dashboard_icon"
                            className={styles.icon_link}
                        />
                        <p>
                            CUSTOM <br></br>DASHBOARD
                        </p>
                    </div>
                    <div className={styles.menu_box}>
                        <img
                            src="./media/dashboard_icon.png"
                            alt="dashboard_icon"
                            className={styles.icon_link}
                        />
                        <p>
                            STATISTICAL<br></br>DATA LIST
                        </p>
                    </div>
                    <div className={styles.menu_box}>
                        <img
                            src="./media/dashboard_icon.png"
                            alt="dashboard_icon"
                            className={styles.icon_link}
                        />
                        <p>
                            NEWS <br></br> SUMMARY
                        </p>
                    </div>
                    <div className={styles.menu_box}>
                        <img
                            src="./media/dashboard_icon.png"
                            alt="dashboard_icon"
                            className={styles.icon_link}
                        />
                        <p>
                            DATA UTILIZATION<br></br> CHART RANKING LIST
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.menu_desc}>
                <div className={styles.menu_title}>
                    <img
                        src="./media/dashboard_icon.png"
                        alt="dashboard_icon"
                        className={styles.icon_link}
                    />
                    <p>
                        CUSTOM <br></br>DASHBOARD
                    </p>
                </div>
                <div className={styles.menu_text}>
                    <h3 className={styles.menu_title}>커스텀 대시보드는</h3>
                    <p className={styles.menu_info}>
                        사용자가 원하는 의료 데이터 차트를 즐겨찾기하고,
                        자유롭게 위치를 이동하여 자신만의 대시보드를 만들 수
                        있는 서비스입니다. 자주 보는 항목들을 모아서 편리하게
                        확인하세요!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
