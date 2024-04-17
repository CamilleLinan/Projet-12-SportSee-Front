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

    return (
        <section className="radar-container">
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <RadarChart data={formatedData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 13 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 280]} tick={false} axisLine={false} />
                    <Radar name="" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </section>
    )
}

export default PerformanceChart;