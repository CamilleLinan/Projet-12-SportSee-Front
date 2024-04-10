import { FC, useEffect, useState } from "react";
import "./_AverageSessionChart.scss";
import UserService from "../../../services/UserService";
import { AverageSession } from "../../../models/averageSession.model";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface UserId {
    userId: number | undefined;
}

interface AverageSessionData {
    day: string;
    duration: number;
}

const AverageSessionChart:FC<UserId> = ({ userId }) => {
    const [ userAverageSession, setUserAverageSession ] = useState<AverageSession | undefined>();

    useEffect(() => {
        const fetchUserAverageSession = async () => {
            try {
                if (userId) {
                    const userAverageSessionData = await UserService.getUserAverageSessions(userId);
                    setUserAverageSession(userAverageSessionData);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserAverageSession();
    }, [userId]);

    let formatedData: AverageSessionData[] = [];
    if (userAverageSession && userAverageSession.sessions) {
        const day = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        formatedData = userAverageSession?.sessions.map((session, index) => ({
            day: day[index],
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
                        padding={{ left: 5, right: 5 }}
                    />
                    <YAxis hide domain={[0, 'dataMax + 30']} />
                    <Tooltip
                        content={({ payload, active }) => {
                            if (payload && active) {
                                return (
                                    <p className="average-session-chart__tooltip">
                                        {`${payload[0].value} mins`}
                                    </p>
                                );
                            }
                            return null;
                        }}
                        contentStyle={{ color: "white" }}
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