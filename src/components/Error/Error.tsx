import { FC } from "react";
import "./_Error.scss";
import icon from "../../assets/exclamation.svg";

interface ErrorProps {
    textError?: string;
}

const Error:FC<ErrorProps> = ({ textError }) => {
    return (
        <div className="error-container">
            <img src={icon} alt="error-icon" className="error-icon" />
            <p className="error-text">
                {textError ? textError : "Une erreur est apparue lors de la récupération des données"}
            </p>
        </div>
    )
}

export default Error;