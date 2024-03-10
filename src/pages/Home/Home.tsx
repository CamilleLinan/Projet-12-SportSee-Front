import { FC, useContext } from "react";
import Header from "../../components/Header/Header";
import DisplaySidebar from "../../components/Sidebar/DisplaySidebar/DisplaySidebar";
import AuthContext from "../../context/authContext";
import Title from "../../components/Title/Title";
import DisplayKeyDataCard from "../../components/KeyData/DisplayKeyDataCard/DisplayKeyDataCard";

const Home:FC = () => {
    const { userData, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <p>Chargement...</p>;
    }

    const firstName = userData?.userInfos.firstName;
    const keyData = userData?.keyData;

    return (
        <>
            <Header />
            <DisplaySidebar />
            <Title firstName={firstName} />
            <DisplayKeyDataCard keyData={keyData} />
        </>
    )
};

export default Home;
