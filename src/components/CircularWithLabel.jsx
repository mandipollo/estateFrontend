import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const CircularPercentage = ({ percentage, percentageHandler }) => {
	return (
		<div style={{ position: "relative", display: "inline-block" }}>
			<CircularProgress
				onChange={percentageHandler}
				variant="determinate"
				value={percentage}
				color="success"
				size={60}
				thickness={3}
				sx={{
					"& circle": {
						transition: "stroke-dashoffset 0.3s",
						strokeDashoffset: `calc(100 - ${percentage})`,
					},
				}}
			/>
			<Typography
				variant="body2"
				component="div"
				color="green"
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
			>
				{`${percentage}%`}
			</Typography>
		</div>
	);
};

export default CircularPercentage;
