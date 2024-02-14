import { FC, useContext } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import AuthContext from "../../context/authContext";
import Title from "../../components/Title/Title";

const Home:FC = () => {
    const authCtx = useContext(AuthContext);
    const { userData, isLoading } = authCtx;

    if (isLoading) {
        return <p>Chargement...</p>;
    }

    const firstName = userData?.userInfos.firstName;

    return (
        <>
            <Header />
            <Sidebar />
            <Title firstName={firstName} />
        </>
    )
};

export default Home;