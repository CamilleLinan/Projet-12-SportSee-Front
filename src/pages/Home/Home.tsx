import { FC, useContext } from "react";
import Header from "../../components/Header/Header";
import DisplaySidebar from "../../components/Sidebar/DisplaySidebar/DisplaySidebar";
import AuthContext from "../../context/authContext";
import Title from "../../components/Title/Title";
import DisplayKeyDataCard from "../../components/KeyData/DisplayKeyDataCard/DisplayKeyDataCard";
import ScoreGraph from "../../components/ScoreGraph/ScoreGraph";

const Home:FC = () => {
    const { userData, isLoading } = useContext(AuthContext);

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
            <Title firstName={firstName} />
            <DisplayKeyDataCard keyData={keyData} />
            <ScoreGraph score={todayScore} />
        </>
    )
};

export default Home;
