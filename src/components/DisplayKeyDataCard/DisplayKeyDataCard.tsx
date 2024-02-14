import { FC } from "react";
import "./_DisplayKeyDataCard.scss";
import KeyDataCard from "../KeyDataCard/KeyDataCard";

interface KeyDataProps {
    keyData: {
        calorieCount: number;
        proteinCount: number;
        carbohydrateCount: number;
        lipidCount: number;
    } | undefined;
}

const DisplayKeyDataCard:FC<KeyDataProps> = ({ keyData }) => {

    return (
        <section className="key-data-container">
            <KeyDataCard keyData={keyData?.calorieCount} keyDataName="Calories" />
            <KeyDataCard keyData={keyData?.proteinCount} keyDataName="Proteines" />
            <KeyDataCard keyData={keyData?.carbohydrateCount} keyDataName="Glucides" />
            <KeyDataCard keyData={keyData?.lipidCount} keyDataName="Lipides" />
        </section>
    )
};

export default DisplayKeyDataCard;