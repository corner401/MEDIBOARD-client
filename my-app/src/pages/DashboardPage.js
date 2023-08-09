//{/* 커스텀 대시보드 페이지  */}

import React from "react";
import styles from "../css/rank.module.css";
import ChartList from "../components/ChartList";
import Menubar from "../components/Menubar";
import TopNav from "../components/TopNav";


//* 상단 나브 바 
const pageIconAddress = "../media/dashboard_icon_title.jpg";
const pageTitleText = '커스텀 대시보드';

//* 대시보드 상세 정보
const DashboardPage = () => {
    const reportId1 = "99fc4531-73f3-4bda-b8f9-ef2d9948d577";
    const embedUrl1 =
        "https://app.powerbi.com/reportEmbed?reportId=30a825e3-341b-40a9-9466-ae3763719b5e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d";
    const accessToken1 =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYzMwZmViZWUtNzU4Yy00ZGUxLWJhNTEtYzdmZjNhNWE3MGM2LyIsImlhdCI6MTY5MDk4MDQ0NywibmJmIjoxNjkwOTgwNDQ3LCJleHAiOjE2OTA5ODU3MjAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFLeEsrOGdKck5yazdnQWw3VCt4SG1pRU5HeDA4a29IdlJ5L3AyTFI5dWI1TUpvRCtLSTRUNVZkME1rQ21tb3VQIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImlwYWRkciI6IjE3NS4xMTUuMjMzLjE3NiIsIm5hbWUiOiJEYW5pZWwgRmFybGV5Iiwib2lkIjoiMWE0YjM0MWEtNTlhOC00YjFiLTgzMjMtNzc2MzU2ZTNmNzc3IiwicHVpZCI6IjEwMDMyMDAwRkNFQzc1NkYiLCJyaCI6IjAuQVJNQTd1c1B3NHgxNFUyNlVjZl9PbHB3eGdrQUFBQUFBQUFBd0FBQUFBQUFBQURhQU1jLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IllZLVRQamF1a0JBU2Flc3JxdDUzS1R6NXloR25nVWlyQ2tiUlROalBCWUEiLCJ0aWQiOiJjMzBmZWJlZS03NThjLTRkZTEtYmE1MS1jN2ZmM2E1YTcwYzYiLCJ1bmlxdWVfbmFtZSI6IksxMjY1MEBvZmZpY2UzNjUuYmx1ZSIsInVwbiI6IksxMjY1MEBvZmZpY2UzNjUuYmx1ZSIsInV0aSI6IkRkVWJkNFRvVGtPQTBoTERMZmhVQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.Voak5PXKWuv6IqtjbsTZVC099sAR8z8LXmAWRgmnyCktmoGwZXxLmIkweU4o7DRRs8I2cMU-x6ey-Q16bsswEemUM14TNAWNENnGKmHVvgo_4XajMJJ1JrFPU-HM9ji-EX3F37aZrVw9re0-FnAik6dn8EDtqjhUWb7nw3Anf81DEfR09pH_4rwcN1-zQimDlcR5IhOFcbX2a6uUUJo7PWBNsdGZ26-fJWk0JfCIqBPNz3IbjSoYeK704zFzcG4AhEUesw0T7ZU6euweZdbrjVY_GQIjcD3OIE3SA4a0yiDQkfOFbYEy2UslPn9G-dbQ1oZaSXEjM1UVisqqYAhGDA";

    const reportId2 = "99fc4531-73f3-4bda-b8f9-ef2d9948d577";
    const embedUrl2 =
        "https://app.powerbi.com/reportEmbed?reportId=30a825e3-341b-40a9-9466-ae3763719b5e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d";
    const accessToken2 =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYzMwZmViZWUtNzU4Yy00ZGUxLWJhNTEtYzdmZjNhNWE3MGM2LyIsImlhdCI6MTY5MDk4MDQ0NywibmJmIjoxNjkwOTgwNDQ3LCJleHAiOjE2OTA5ODU3MjAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFLeEsrOGdKck5yazdnQWw3VCt4SG1pRU5HeDA4a29IdlJ5L3AyTFI5dWI1TUpvRCtLSTRUNVZkME1rQ21tb3VQIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImlwYWRkciI6IjE3NS4xMTUuMjMzLjE3NiIsIm5hbWUiOiJEYW5pZWwgRmFybGV5Iiwib2lkIjoiMWE0YjM0MWEtNTlhOC00YjFiLTgzMjMtNzc2MzU2ZTNmNzc3IiwicHVpZCI6IjEwMDMyMDAwRkNFQzc1NkYiLCJyaCI6IjAuQVJNQTd1c1B3NHgxNFUyNlVjZl9PbHB3eGdrQUFBQUFBQUFBd0FBQUFBQUFBQURhQU1jLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IllZLVRQamF1a0JBU2Flc3JxdDUzS1R6NXloR25nVWlyQ2tiUlROalBCWUEiLCJ0aWQiOiJjMzBmZWJlZS03NThjLTRkZTEtYmE1MS1jN2ZmM2E1YTcwYzYiLCJ1bmlxdWVfbmFtZSI6IksxMjY1MEBvZmZpY2UzNjUuYmx1ZSIsInVwbiI6IksxMjY1MEBvZmZpY2UzNjUuYmx1ZSIsInV0aSI6IkRkVWJkNFRvVGtPQTBoTERMZmhVQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.Voak5PXKWuv6IqtjbsTZVC099sAR8z8LXmAWRgmnyCktmoGwZXxLmIkweU4o7DRRs8I2cMU-x6ey-Q16bsswEemUM14TNAWNENnGKmHVvgo_4XajMJJ1JrFPU-HM9ji-EX3F37aZrVw9re0-FnAik6dn8EDtqjhUWb7nw3Anf81DEfR09pH_4rwcN1-zQimDlcR5IhOFcbX2a6uUUJo7PWBNsdGZ26-fJWk0JfCIqBPNz3IbjSoYeK704zFzcG4AhEUesw0T7ZU6euweZdbrjVY_GQIjcD3OIE3SA4a0yiDQkfOFbYEy2UslPn9G-dbQ1oZaSXEjM1UVisqqYAhGDA";

    const reportId3 = "99fc4531-73f3-4bda-b8f9-ef2d9948d577";
    const embedUrl3 =
        "https://app.powerbi.com/reportEmbed?reportId=30a825e3-341b-40a9-9466-ae3763719b5e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d";
    const accessToken3 =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYzMwZmViZWUtNzU4Yy00ZGUxLWJhNTEtYzdmZjNhNWE3MGM2LyIsImlhdCI6MTY5MDk4MDQ0NywibmJmIjoxNjkwOTgwNDQ3LCJleHAiOjE2OTA5ODU3MjAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFLeEsrOGdKck5yazdnQWw3VCt4SG1pRU5HeDA4a29IdlJ5L3AyTFI5dWI1TUpvRCtLSTRUNVZkME1rQ21tb3VQIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImlwYWRkciI6IjE3NS4xMTUuMjMzLjE3NiIsIm5hbWUiOiJEYW5pZWwgRmFybGV5Iiwib2lkIjoiMWE0YjM0MWEtNTlhOC00YjFiLTgzMjMtNzc2MzU2ZTNmNzc3IiwicHVpZCI6IjEwMDMyMDAwRkNFQzc1NkYiLCJyaCI6IjAuQVJNQTd1c1B3NHgxNFUyNlVjZl9PbHB3eGdrQUFBQUFBQUFBd0FBQUFBQUFBQURhQU1jLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IllZLVRQamF1a0JBU2Flc3JxdDUzS1R6NXloR25nVWlyQ2tiUlROalBCWUEiLCJ0aWQiOiJjMzBmZWJlZS03NThjLTRkZTEtYmE1MS1jN2ZmM2E1YTcwYzYiLCJ1bmlxdWVfbmFtZSI6IksxMjY1MEBvZmZpY2UzNjUuYmx1ZSIsInVwbiI6IksxMjY1MEBvZmZpY2UzNjUuYmx1ZSIsInV0aSI6IkRkVWJkNFRvVGtPQTBoTERMZmhVQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.Voak5PXKWuv6IqtjbsTZVC099sAR8z8LXmAWRgmnyCktmoGwZXxLmIkweU4o7DRRs8I2cMU-x6ey-Q16bsswEemUM14TNAWNENnGKmHVvgo_4XajMJJ1JrFPU-HM9ji-EX3F37aZrVw9re0-FnAik6dn8EDtqjhUWb7nw3Anf81DEfR09pH_4rwcN1-zQimDlcR5IhOFcbX2a6uUUJo7PWBNsdGZ26-fJWk0JfCIqBPNz3IbjSoYeK704zFzcG4AhEUesw0T7ZU6euweZdbrjVY_GQIjcD3OIE3SA4a0yiDQkfOFbYEy2UslPn9G-dbQ1oZaSXEjM1UVisqqYAhGDA";

    const chartList = [
        {
            title: "제목1",
            reportId: reportId1,
            embedUrl: embedUrl1,
            accessToken: accessToken1,
        },
        {
            title: "제목2",
            reportId: reportId2,
            embedUrl: embedUrl2,
            accessToken: accessToken2,
        },
        {
            title: "제목3",
            reportId: reportId3,
            embedUrl: embedUrl3,
            accessToken: accessToken3,
        },
        {
            title: "제목1",
            reportId: reportId1,
            embedUrl: embedUrl1,
            accessToken: accessToken1,
        },
        {
            title: "제목2",
            reportId: reportId2,
            embedUrl: embedUrl2,
            accessToken: accessToken2,
        },
        {
            title: "제목3",
            reportId: reportId3,
            embedUrl: embedUrl3,
            accessToken: accessToken3,
        },
        {
            title: "제목1",
            reportId: reportId1,
            embedUrl: embedUrl1,
            accessToken: accessToken1,
        },
        {
            title: "제목2",
            reportId: reportId2,
            embedUrl: embedUrl2,
            accessToken: accessToken2,
        },
        {
            title: "제목3",
            reportId: reportId3,
            embedUrl: embedUrl3,
            accessToken: accessToken3,
        },
    ];

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
