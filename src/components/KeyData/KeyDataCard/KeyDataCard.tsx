import { FC } from "react";
import "./_KeyDataCard.scss";

interface KeyDataCardProps {
    icon: string;
    keyData: string | undefined;
    keyDataName: string; 
}

const KeyDataCard:FC<KeyDataCardProps> = ({ icon, keyData, keyDataName }) => {

    return (
        <div className="key-data-card">
            <div className={`key-data-card-bg-icon key-data-card-bg-icon-${keyDataName.toLowerCase()}`}>
                <img src={icon} alt={`${keyDataName}-icon`} />
            </div>
            <div>
                <div className="key-data-card-number">{keyData}</div>
                <div>{keyDataName}</div>
            </div>
        </div>
    )
};

export default KeyDataCard;