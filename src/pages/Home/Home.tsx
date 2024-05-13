import { FC, useContext } from "react";
import "./_Home.scss";
import Header from "../../components/Header/Header";
import DisplaySidebar from "../../components/Sidebar/DisplaySidebar/DisplaySidebar";
import AuthContext from "../../context/authContext";
import Title from "../../components/Title/Title";
import DisplayKeyDataCard from "../../components/KeyData/DisplayKeyDataCard/DisplayKeyDataCard";
import GoalChart from "../../components/Charts/GoalChart/GoalChart";
import PerformanceChart from "../../components/Charts/PerformanceChart/PerformanceChart";
import AverageSessionChart from "../../components/Charts/AverageSessionChart/AverageSessionChart";
import ActivityChart from "../../components/Charts/ActivityChart/ActivityChart";

const Home:FC = () => {
    const { userData, userActivity, userAverageSession, userPerformance, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <p>Chargement...</p>;
    }

    const firstName = userData?.userInfos.firstName;
    const keyData = userData?.keyData;
    const todayScore = userData?.todayScore || userData?.score;

    return (
        <>
            <Header />
            <DisplaySidebar />
            <section className="home">
                <Title firstName={firstName} />
                <div className="container">
                    <div className="charts">
                        <ActivityChart userActivity={userActivity} />
                        <div className="charts-medium">
                            <AverageSessionChart userAverageSession={userAverageSession} />
                            <PerformanceChart userPerformance={userPerformance} />
                            <GoalChart score={todayScore} />
                        </div>
                    </div>
                    <DisplayKeyDataCard keyData={keyData} />
                </div>
            </section>
        </>
    )
};

export default Home;
