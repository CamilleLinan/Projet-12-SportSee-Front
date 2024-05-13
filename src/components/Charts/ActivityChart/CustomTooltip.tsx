import { FC } from "react";
import "./_ActivityChart.scss";
import { NameType, Payload, ValueType } from "recharts/types/component/DefaultTooltipContent";

interface CustomTooltipProps {
    active: boolean | undefined,
    payload: Payload<ValueType, NameType>[] | undefined,
}

const CustomTooltip:FC<CustomTooltipProps> = ({ active, payload }) => {
    if (!active || !payload || payload.length === 0) return null;

    return (
        <div className="custom-tooltip">
            <p>{`${payload[0].value}kg`}</p>
            <p>{`${payload[1].value}Kcal`}</p>
        </div>
    );
};

export default CustomTooltip;