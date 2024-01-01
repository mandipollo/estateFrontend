import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const CircularIndeterminate = () => {
	return (
		<Box
			sx={{
				display: "flex",
				height: "60vh",
				width: "100vw",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<CircularProgress color="success" />
		</Box>
	);
};

export default CircularIndeterminate;
