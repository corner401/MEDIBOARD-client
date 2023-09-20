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
                <img src="./media/main_logo.png" alt="logo" id={styles.logo_img} />
                <div id={styles.title}>MEDIBOARD</div>
                <div id={styles.title_info}>공공의료 데이터 분석 대시보드</div>
            </div>

            <div id={styles.info_1}>
                <img src={require("../media/main_1.png")} alt="main_1" className={styles.info_img} />

                <div id={styles.desc_1}>
                    <img src={require("../media/icon_1.png")} alt="icon_1" className={styles.info_icon} />
                    <p>보건 데이터 종류 수</p>
                </div>
            </div>

            <div id={styles.info_2}>
                <div id={styles.desc_2}>
                    <img src={require("../media/icon_2.png")} alt="icon_2" className={styles.info_icon} />
                    <p>공공 데이터 수</p>
                </div>
                <img src={require("../media/main_2.png")} alt="main_2" className={styles.info_img} />
            </div>

            <div id={styles.quick_link}>
                <h3 id={styles.link_title}>Quick Link</h3>
                <div id={styles.menu_link}>
                    <div className={styles.menu_box} onClick={goToDashboard}>
                        <img src="./media/dashboard_icon.png" alt="dashboard_icon" className={styles.icon_link} />
                        <p>
                            CUSTOM <br />
                            DASHBOARD
                        </p>
                    </div>
                    <div className={styles.menu_box} onClick={goToChart}>
                        <img src="./media/chart_icon.png" alt="chart_icon" className={styles.icon_link} />
                        <p>
                            STATISTICAL
                            <br />
                            DATA LIST
                        </p>
                    </div>
                    <div className={styles.menu_box} onClick={goToNews}>
                        <img src="./media/news_icon.png" alt="news_icon" className={styles.icon_link} />
                        <p>
                            NEWS <br /> SUMMARY
                        </p>
                    </div>
                    <div className={styles.menu_box} onClick={goToRank}>
                        <img src="./media/rank_icon.png" alt="rank_icon" className={styles.icon_link} />
                        <p>
                            DATA UTILIZATION
                            <br /> CHART RANKING LIST
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.menu_desc}>
                <div className={styles.menu_title}>
                    <img src="./media/dashboard_icon.png" alt="dashboard_icon" className={styles.icon_link} />
                    <h1>
                        CUSTOM <br />
                        DASHBOARD
                    </h1>
                </div>
                <div className={styles.menu_text}>
                    <h2 className={styles.menu_func}>커스텀 대시보드는</h2>
                    <p className={styles.menu_info}>
                        사용자가 원하는 의료 데이터 차트를 즐겨찾기하고, 자유롭게 위치를 이동하여 자신만의 대시보드를 만들 수 있는 서비스입니다. <br />
                        자주 보는 항목들을 모아서 편리하게 확인하세요!
                    </p>
                </div>
            </div>

            <div className={styles.menu_desc_2}>
                <div className={styles.menu_title_2}>
                    <img src="./media/chart_icon.png" alt="chart_icon" className={styles.icon_link} />
                    <h1>
                        STATISTICAL
                        <br />
                        DATA LIST
                    </h1>
                </div>
                <div className={styles.menu_text_2}>
                    <h2 className={styles.menu_func}>통계 자료 데이터 목록은</h2>
                    <p className={styles.menu_info}>
                        다양한 의료 데이터를 시각화하여 제공합니다. 사용자는 자주 찾는 데이터를 선택하여 자신만의 대시보드에 추가할 수 있으며, 다양한 통계 정보를 쉽게 탐색할 수 있습니다.
                        <br />
                        포괄적인 의료 정보로 더 나은 선택을 이어가세요!
                    </p>
                </div>
            </div>

            <div className={styles.menu_desc}>
                <div className={styles.menu_title}>
                    <img src="./media/news_icon.png" alt="news_icon" className={styles.icon_link} />
                    <h1>
                        NEWS <br /> SUMMARY
                    </h1>
                </div>
                <div className={styles.menu_text}>
                    <h2 className={styles.menu_func}>뉴스 요약은</h2>
                    <p className={styles.menu_info}>
                        다양한 의료 뉴스를 검색하여 요약된 설명과 기사 제목, 출처를 확인하는 뉴스 요약 서비스를 소개합니다. 워드 클라우드 서비스로 현재 가장 화두되는 의료 이슈를 한눈에 파악할 수 있습니다. <br />
                        최신 의료 동향을 놓치지 마시고, 간편하고 빠르게 정보를 습득하세요!
                    </p>
                </div>
            </div>

            <div className={styles.menu_desc_2}>
                <div className={styles.menu_title_2}>
                    <img src="./media/rank_icon.png" alt="rank_icon" className={styles.icon_link} />
                    <h1>
                        DATA UTILIZATION
                        <br /> CHART RANKING LIST
                    </h1>
                </div>
                <div className={styles.menu_text_2}>
                    <h2 className={styles.menu_func}>데이터 활용 차트 순위 목록은</h2>
                    <p className={styles.menu_info}>
                        사업가, 의료진, 환자, 기타 직군마다 가장 선호하는 통계 데이터 항목을 확인하고 다른 사용자의 활용 추이를 살펴볼 수 있습니다. <br />더 나은 의사결정과 효율적인 업무에 도움을 주는 정보를 손쉽게 찾아보세요!
                    </p>
                </div>
            </div>

            <div id={styles.main_bottom}>
                <p>
                    “MEDIBOARD”, <br />
                    지금 당신의 새로운 습관을 선택하세요
                </p>
            </div>

            <button id={styles.start_btn} onClick={goToLogin}>
                <h3>시작하기</h3>
                <img src="./media/main_logo.png" alt="logo" id={styles.start_logo_img} />
            </button>

            <div id={styles.example}>
                <div className={styles.ex_box}>
                    <h2 className={styles.ex_title}>의료진</h2>
                    <div className={styles.ex_text}>
                        의료진은 공공보건 데이터를 활용하여 지역 건강 상태를 분석하고 질병 예방, 정책 수립에 활용합니다.<br></br>
                        공공보건 데이터는 환자 건강 정보 분석과 지역사회 건강 문제 파악에 중요한 역할을 합니다.
                    </div>
                </div>

                <img src={require("../media/ex_user_1.png")} alt="icon_2" id={styles.ex_image1} />

                <div className={styles.ex_box}>
                    <h2 className={styles.ex_title}>기타 사용자</h2>
                    <div className={styles.ex_text}>
                        대다수의 사용자는 주로 공공보건 데이터 중 예방접종 정보, 의료기관 위치, 건강정보 등을 활용하여 자신과 가족의 건강 관리에 도움을 받고,<br></br>
                        지역 사회의 보건 상태를 파악하여 건강한 삶을 지향합니다. <br></br>
                        공공보건 데이터는 개인의 건강 정보 확인과 의료 서비스 접근을 용이하게 하며, 건강한 삶을 즐기는 데 도움을 줍니다.
                    </div>
                </div>

                <img src={require("../media/ex_user_2.png")} alt="icon_2" id={styles.ex_image2} />

                <div className={styles.ex_box}>
                    <h2 className={styles.ex_title}>의료계 사업가</h2>
                    <div className={styles.ex_text}>
                        의료계 사업가들은 주로 공공보건 데이터 중 전염병 발생 경향, 의료 시설 분포, 인구 통계 등을 활용하여 비즈니스 기회를 발굴하고<br></br>
                        의료 서비스 제공에 있어 전략적인 결정을 내리며 혁신적인 솔루션을 개발합니다. <br></br>
                        공공보건 데이터는 의료 기업들의 비즈니스 모델 개발과 효과적인 의료 서비스 제공에 중요한 역할을 수행합니다.
                    </div>
                </div>

                <img src={require("../media/ex_user_3.png")} alt="icon_2" id={styles.ex_image3} />

                <div className={styles.ex_box}>
                    <h2 className={styles.ex_title}>환자</h2>
                    <div className={styles.ex_text}>
                        환자은 주로 공공보건 데이터 중 예방접종 정보, 병원/의원 위치, 건강 정보 등을 활용하여 자신의 건강 상태를 파악하고 예방 및 치료에 대한 의사 결정을 도움받습니다. <br></br>
                        공공보건 데이터는 환자들의 건강 정보 접근을 용이하게 하며 건강한 삶을 유지하는 데에 도움을 줍니다.
                    </div>
                </div>

                <img src={require("../media/ex_user_4.png")} alt="icon_2" id={styles.ex_image4} />
            </div>
        </div>
    );
};

export default MainPage;
