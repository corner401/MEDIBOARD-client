//{/* 커스텀 대시보드 페이지  */}
import React, { useEffect, useState } from "react";
import styles from "../css/dashboard.module.css";
import ChartList from "../components/ChartList";
import Menubar from "../components/Menubar";
import TopNav from "../components/TopNav";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//* 상단 나브 바 
const pageIconAddress = "../media/dashboard_icon_title.jpg";
const pageTitleText = '커스텀 대시보드';

//* 대시보드 상세 정보
const DashboardPage = () => {
    const userId = useSelector((store) => store.userReducer.userId);
    const [pageNum, setPageNum] = useState(1);
    const [chartList, setChartList] = useState([]);

		const navigate = useNavigate();

    useEffect(() => {

			if (userId == null) {
				navigate("/login");
			}

        const body = {
            userId: userId
        }
        
        axios.post("api/users/dashboard/"+pageNum, body).then((response) => {
            console.log(response.data);
            setChartList(response.data.statList);
        })
    },[]);

    return (
        <>
            <Menubar />
            <div className={styles.main}>
                <div>
                    {" "}
                    {/* 상단 나브 바*/}
                    <TopNav pageIcon={pageIconAddress} pageTitle={pageTitleText} />

                </div>

                <div>
                    {" "}
                    {/* 차트 항목 묶음 */}
                    <ChartList data={chartList} />
                </div>
            </div>
        </>
    );
};

export default DashboardPage;
