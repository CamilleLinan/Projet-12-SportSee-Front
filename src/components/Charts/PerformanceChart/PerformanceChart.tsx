import { FC } from "react";
import "./_PerformanceChart.scss";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { Performance } from "../../../models/performance.model";

interface PerformanceChartProps {
    userPerformance: Performance | undefined;
}

interface PerformanceData {
    value: number;
    kind: string;
}

const PerformanceChart:FC<PerformanceChartProps> = ({ userPerformance }) => {
    let formatedData: PerformanceData[] = [];
    
    if (userPerformance && userPerformance.data) {
        formatedData = userPerformance.data.map((item) => ({
            value: item.value,
            kind: userPerformance.kind[item.kind]
        }));
    }

    const orderedCategories = ["intensity", "cardio", "energy", "endurance", "strength", "speed"];

    formatedData.sort((a, b) => {
        return orderedCategories.indexOf(a.kind) - orderedCategories.indexOf(b.kind);
    });

    return (
        <section className="radar-container">
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <RadarChart data={formatedData}>
                    <PolarGrid 
                        gridType="polygon" 
                        radialLines={false} 
                    />
                    <PolarAngleAxis 
                        dataKey="kind" 
                        tick={{ 
                            fill: "white", 
                            fontSize: 15,
                        }}
                        tickSize={14}
                    />
                    <PolarRadiusAxis 
                        angle={30} 
                        domain={[0, 280]} 
                        tick={false} 
                        axisLine={false}
                    />
                    <Radar 
                        name="" 
                        dataKey="value" 
                        stroke="#FF0101" 
                        fill="#FF0101" 
                        fillOpacity={0.7}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </section>
    )
}

export default PerformanceChart;