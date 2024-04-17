import { FC } from "react";
import "./_AverageSessionChart.scss";
import { NameType, Payload, ValueType } from "recharts/types/component/DefaultTooltipContent";

interface CustomTitleProps {
    active: boolean | undefined,
    payload: Payload<ValueType, NameType>[] | undefined,
}

const CustomTitle:FC<CustomTitleProps> = ({ active, payload }) => {
    if (!active || !payload || payload.length === 0) return null;

    return (
        <div className="custom-tooltip">
            <p>
                {payload[0].value} min
            </p>
        </div>
    );
};

export default CustomTitle;