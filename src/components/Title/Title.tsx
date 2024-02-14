import { FC } from "react";
import "./_Title.scss";

interface TitleProps {
    firstName: string | undefined;
}

const Title:FC<TitleProps> = ({ firstName }) => {

    return (
        <section className="title">
            <h1>Bonjour <span className="title-firstname">{firstName}</span></h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </section>
    )
};

export default Title;