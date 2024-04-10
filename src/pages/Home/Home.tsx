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

const Home:FC = () => {
    const { userData, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <p>Chargement...</p>;
    }

    const userId = userData?.id;
    const firstName = userData?.userInfos.firstName;
    const keyData = userData?.keyData;
    const todayScore = userData?.todayScore || userData?.score;

    return (
        <>
            <Header />
            <DisplaySidebar />
            <Title firstName={firstName} />
            <section className="charts">
                <div className="charts-medium">
                    <AverageSessionChart userId={userId} />
                    <PerformanceChart userId={userId} />
                    <GoalChart score={todayScore} />
                </div>
                <DisplayKeyDataCard keyData={keyData} />
            </section>
        </>
    )
};

export default Home;
