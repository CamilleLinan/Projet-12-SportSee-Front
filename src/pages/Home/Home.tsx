import { FC, useContext } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import AuthContext from "../../context/authContext";

const Home:FC = () => {
    const authCtx = useContext(AuthContext);
    const { isLoading } = authCtx;

    if (isLoading) {
        return <p>Chargement...</p>;
    }

    return (
        <>
            <Header />
            <Sidebar />
        </>
    )
};

export default Home;