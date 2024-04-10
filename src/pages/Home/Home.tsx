import { FC, useContext } from "react";
import "./_Home.scss";
import Header from "../../components/Header/Header";
import DisplaySidebar from "../../components/Sidebar/DisplaySidebar/DisplaySidebar";
import AuthContext from "../../context/authContext";
import Title from "../../components/Title/Title";
import DisplayKeyDataCard from "../../components/KeyData/DisplayKeyDataCard/DisplayKeyDataCard";
import GoalChart from "../../components/Charts/GoalChart/GoalChart";
import PerformanceChart from "../../components/Charts/PerformanceChart/PerformanceChart";

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
            <DisplayKeyDataCard keyData={keyData} />
            <div className="charts-medium">
                <PerformanceChart userId={userId} />
                <GoalChart score={todayScore} />
            </div>
        </>
    )
};

export default Home;
