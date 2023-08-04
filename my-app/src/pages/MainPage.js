import React from "react";
import styles from "../css/main.module.css";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    };

    const goToDashboard = () => {
        navigate("/dashboard");
    };

    const goToChart = () => {
        navigate("/chart");
    };

    const goToNews = () => {
        navigate("/news");
    };

    const goToRank = () => {
        navigate("/rank");
    };

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
                        src="./media/main_logo.png"
                        alt="icon_1"
                        id={styles.icon_1}
                    />
                    <p>보건 데이터 종류 수</p>
                </div>
            </div>

            <div id={styles.info_2}>
                <div id={styles.desc_2}>
                    <img
                        src="./media/main_logo.png"
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
                    <div className={styles.menu_box} onClick={goToDashboard}>
                        <img
                            src="./media/dashboard_icon.png"
                            alt="dashboard_icon"
                            className={styles.icon_link}
                        />
                        <p>
                            CUSTOM <br></br>DASHBOARD
                        </p>
                    </div>
                    <div className={styles.menu_box} onClick={goToChart}>
                        <img
                            src="./media/chart_icon.png"
                            alt="chart_icon"
                            className={styles.icon_link}
                        />
                        <p>
                            STATISTICAL<br></br>DATA LIST
                        </p>
                    </div>
                    <div className={styles.menu_box} onClick={goToNews}>
                        <img
                            src="./media/news_icon.png"
                            alt="news_icon"
                            className={styles.icon_link}
                        />
                        <p>
                            NEWS <br></br> SUMMARY
                        </p>
                    </div>
                    <div className={styles.menu_box} onClick={goToRank}>
                        <img
                            src="./media/rank_icon.png"
                            alt="rank_icon"
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
                    <h1>
                        CUSTOM <br></br>DASHBOARD
                    </h1>
                </div>
                <div className={styles.menu_text}>
                    <h2 className={styles.menu_func}>커스텀 대시보드는</h2>
                    <p className={styles.menu_info}>
                        사용자가 원하는 의료 데이터 차트를 즐겨찾기하고,
                        자유롭게 위치를 이동하여 자신만의 대시보드를 만들 수
                        있는 서비스입니다. 자주 보는 항목들을 모아서 편리하게
                        확인하세요!
                    </p>
                </div>
            </div>

            <div className={styles.menu_desc_2}>
                <div className={styles.menu_title_2}>
                    <img
                        src="./media/chart_icon.png"
                        alt="chart_icon"
                        className={styles.icon_link}
                    />
                    <h1>
                        STATISTICAL<br></br>DATA LIST
                    </h1>
                </div>
                <div className={styles.menu_text_2}>
                    <h2 className={styles.menu_func}>
                        통계 자료 데이터 목록은
                    </h2>
                    <p className={styles.menu_info}>
                        다양한 의료 데이터를 시각화하여 제공합니다. 사용자는
                        자주 찾는 데이터를 선택하여 자신만의 대시보드에 추가할
                        수 있으며, 다양한 통계 정보를 쉽게 탐색할 수 있습니다.
                        포괄적인 의료 정보로 더 나은 선택을 이어가세요!
                    </p>
                </div>
            </div>

            <div className={styles.menu_desc}>
                <div className={styles.menu_title}>
                    <img
                        src="./media/news_icon.png"
                        alt="news_icon"
                        className={styles.icon_link}
                    />
                    <h1>
                        NEWS <br></br> SUMMARY
                    </h1>
                </div>
                <div className={styles.menu_text}>
                    <h2 className={styles.menu_func}>뉴스 요약은</h2>
                    <p className={styles.menu_info}>
                        다양한 의료 뉴스를 검색하여 요약된 설명과 기사 제목,
                        출처를 확인하는 뉴스 요약 서비스를 소개합니다. 워드
                        클라우드 서비스로 현재 가장 화두되는 의료 이슈를 한눈에
                        파악할 수 있습니다. <br></br>최신 의료 동향을 놓치지
                        마시고, 간편하고 빠르게 정보를 습득하세요!
                    </p>
                </div>
            </div>

            <div className={styles.menu_desc_2}>
                <div className={styles.menu_title_2}>
                    <img
                        src="./media/rank_icon.png"
                        alt="rank_icon"
                        className={styles.icon_link}
                    />
                    <h1>
                        DATA UTILIZATION<br></br> CHART RANKING LIST
                    </h1>
                </div>
                <div className={styles.menu_text_2}>
                    <h2 className={styles.menu_func}>
                        데이터 활용 차트 순위 목록은
                    </h2>
                    <p className={styles.menu_info}>
                        사업가, 의료진, 환자, 기타 직군마다 가장 선호하는 통계
                        데이터 항목을 확인하고 다른 사용자의 활용 추이를 살펴볼
                        수 있습니다. 더 나은 의사결정과 효율적인 업무에 도움을
                        주는 정보를 손쉽게 찾아보세요!
                    </p>
                </div>
            </div>

            <div id={styles.main_bottom}>
                <p>
                    “MEDIBOARD”, <br></br>
                    지금 당신의 새로운 습관을 선택하세요
                </p>
            </div>

            <button id={styles.start_btn} onClick={goToLogin}>
                <h3>시작하기</h3>
                <img
                    src="./media/main_logo.png"
                    alt="logo"
                    id={styles.start_logo_img}
                />
            </button>
        </div>
    );
};

export default MainPage;
