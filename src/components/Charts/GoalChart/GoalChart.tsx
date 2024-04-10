import { FC } from "react";
import "./_GoalChart.scss";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

interface Score {
    score: number | undefined;
}

const GoalChart:FC<Score> = ({ score }) => {
    const data = [
        {
            name: 'score',
            value: score ? score : 0,
        },
    ];

    const COLORS = ['#FF0000', '#FFFFFF'];

    const calculateEndAngle = (score: number | undefined) => {
        if (score) {
            const normalizedScore = Math.min(Math.max(score, 0), 1);
            return 90 + (normalizedScore * 360);
        }
    };

    return (
        <section className="score-container">
			<h3 className="score-container-title">Score</h3>

            <ResponsiveContainer width={"100%"} height={"100%"}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey={"value"}
                        innerRadius={60}
                        outerRadius={70}
                        startAngle={90}
                        endAngle={calculateEndAngle(score)}
                        cornerRadius={"100%"}
                    >
                        {data.map((_entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

			<div className="score-container-label">
				<p className="percent">
					{score && score * 100}%
				</p>
				<p>de votre</p>
				<p>objectif</p>
			</div>
		</section>
    );
}

export default GoalChart;