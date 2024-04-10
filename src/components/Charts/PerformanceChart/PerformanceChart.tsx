import { FC, useEffect, useState } from "react";
import "./_PerformanceChart.scss";
import UserService from "../../../services/UserService";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { Performance } from "../../../models/performance.model";

interface UserId {
    userId: number | undefined;
}

interface PerformanceData {
    value: number;
    kind: string;
}

const PerformanceChart:FC<UserId> = ({ userId }) => {
    const [ userPerformance, setUserPerformance ] = useState<Performance | undefined>();

    useEffect(() => {
        const fetchUserPerformance = async () => {
            try {
                if (userId) {
                    const userPerformanceData = await UserService.getUserPerformance(userId);
                    setUserPerformance(userPerformanceData);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserPerformance();
    }, [userId])

    let newData: PerformanceData[] = [];
    if (userPerformance && userPerformance.data) {
        newData = userPerformance.data.map((item) => ({
            value: item.value,
            kind: userPerformance.kind[item.kind]
        }));
    }

    return (
        <section className="radar-container">
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <RadarChart data={newData}>
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