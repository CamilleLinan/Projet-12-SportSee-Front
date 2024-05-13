import { FC } from "react";
import "./_AverageSessionChart.scss";
import { Rectangle } from "recharts";

interface CustomCursorProps {
    x: number,
    y: number,
}

const CustomCursor:FC<CustomCursorProps> = ({ x, y }) => {
    const adjustedX = x - 190;
    const rightBoundary = 250;
    const width = rightBoundary - adjustedX;

    return (
        <Rectangle
            fill="rgba(0, 0, 0, 0.2)" 
            stroke="none"
            x={rightBoundary - width}
            width={width}
            height={2000}
            className="rectangle"
            style={{ 
                backgroundColor: "#000", 
                overflow: "visible", 
                position: "absolute",
                top: y,
                left: x,
                zIndex: 99999, 
            }}
        />
    );
};

export default CustomCursor;