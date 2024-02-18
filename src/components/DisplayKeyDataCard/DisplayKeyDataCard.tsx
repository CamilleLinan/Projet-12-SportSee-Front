import { FC } from "react";
import "./_DisplayKeyDataCard.scss";
import KeyDataCard from "../KeyDataCard/KeyDataCard";
import energy from '../../assets/icon-energy.svg';
import chicken from '../../assets/icon-chicken.svg';
import apple from '../../assets/icon-apple.svg';
import cheeseburger from '../../assets/icon-cheeseburger.svg';

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
            <KeyDataCard icon={energy} keyData={`${keyData?.calorieCount}kCal`} keyDataName="Calories" />
            <KeyDataCard icon={chicken} keyData={`${keyData?.proteinCount}g`} keyDataName="Proteines" />
            <KeyDataCard icon={apple} keyData={`${keyData?.carbohydrateCount}g`} keyDataName="Glucides" />
            <KeyDataCard icon={cheeseburger} keyData={`${keyData?.lipidCount}g`} keyDataName="Lipides" />
        </section>
    )
};

export default DisplayKeyDataCard;