import { FC } from "react";
import "./_AverageSessionChart.scss";
import { AverageSession } from "../../../models/averageSession.model";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import CustomTooltip from "./CustomTooltip";

interface AverageSessionChartProps {
    userAverageSession: AverageSession | undefined;
}

interface AverageSessionData {
    day: string;
    duration: number;
}

const AverageSessionChart:FC<AverageSessionChartProps> = ({ userAverageSession }) => {
    let formatedData: AverageSessionData[] = [];
    
    if (userAverageSession && userAverageSession.sessions) {
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        formatedData = userAverageSession?.sessions.map((session, index) => ({
            day: days[index],
            duration: session.sessionLength,
        }));
    }

    return (
        <section className="sessions-container">
            <div className="sessions-container-label">
				<p>Durée</p>
				<p>sessions</p>
			</div>
            <ResponsiveContainer width={"100%"} height={"90%"}>
                <LineChart data={formatedData}>
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 14, fill: '#FFFFFF', opacity: 0.5 }}
                        dy={15}
                        padding={{ left: 10, right: 10 }}
                    />
                    <YAxis hide domain={[0, 'dataMax + 30']} />
                    <Tooltip 
                        content={({ active, payload }) => 
                            <CustomTooltip active={active} payload={payload} /> 
                        }
                        cursor={{
                            stroke: "rgba(0, 0, 0, 0.1)",
                            strokeWidth: "20%",
                            style: {
                                transition: "all 1s ease-in-out", 
                            }
                        }}
                        // trigger={"click"}
                    />
                    <Line
                        type="monotone"
                        dataKey="duration"
                        stroke="#FFFFFF"
                        yAxisId={0}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </section>
    )
};

export default AverageSessionChart;