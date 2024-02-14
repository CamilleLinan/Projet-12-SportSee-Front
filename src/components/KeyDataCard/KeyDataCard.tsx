import { FC } from "react";
import "./_KeyDataCard.scss";

interface KeyDataCardProps {
    keyData: number | undefined;
    keyDataName: string; 
}

const KeyDataCard:FC<KeyDataCardProps> = ({ keyData, keyDataName }) => {

    return (
        <div className="key-data-card">
            <i>icone</i>
            <div>
                <span>{keyData}</span>
                <p>{keyDataName}</p>
            </div>
        </div>
    )
};

export default KeyDataCard;