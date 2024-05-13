import { FC } from "react";
import "./_ActivityChart.scss";
import { Activity } from "../../../models/activity.model";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import CustomTooltip from "./CustomTooltip";

interface ActivityProps {
    userActivity: Activity | undefined;
}

const ActivityChart:FC<ActivityProps> = ({ userActivity }) => {
    const formatDay = (date: Date) => {
        return new Date(date).getDate().toString()
    }

    return (
        <section className="activity-container">
            <div className="activity-container-label">Activité quotidienne</div>
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <BarChart
                    data={userActivity?.sessions}
                    barSize={7}
                    barGap={8}
                    margin={{
                        left: 40,
                        top: 25,
                        right: 20,
                        bottom: 25,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="day"
                        tickFormatter={formatDay}
                        tickLine={false}
                        tickMargin={16}
                        tick={{
                            stroke: '#d0d2d9',
                            fontSize: 14,
                            fontWeight: 500,
                        }}
                    />
                    <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        orientation="right" 
                        interval={1} 
                        tick={{
                            stroke: '#d0d2d9',
                            fontSize: 14,
                            fontWeight: 500,
                        }} 
                    />
                    <Tooltip
                        content={({ active, payload }) => 
                            <CustomTooltip active={active} payload={payload} /> 
                        }
                        wrapperStyle={{ outline: 'none' }}
                    />
                    <Legend
                        iconType="circle"
                        iconSize={8}
                        height={80}
                        verticalAlign="top"
                        align="right"
                    />
                    <Bar
                        name="Poids (kg)"
                        dataKey="kilogram"
                        fill="#282D30"
                        radius={[3.5, 3.5, 0, 0]}
                    />
                    <Bar
                        name="Calories brûlées (kCal)"
                        dataKey="calories"
                        fill="#FF0101"
                        radius={[3.5, 3.5, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </section>
    )
}

export default ActivityChart;