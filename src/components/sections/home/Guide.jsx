import React from "react";
import { Box, Typography, Button, useMediaQuery, Paper } from "@mui/material";
import theme from "../../../theme";
import businessPerson from "../../../assets/svg/businessPerson.svg";

const Guide = () => {
	const isLaptop = useMediaQuery(theme.breakpoints.down("laptop"));
	return (
		<Box
			display="flex"
			sx={{
				justifyContent: "center",
				margin: "2em",
			}}
		>
			<Paper
				sx={{
					display: "flex",
					borderRadius: "1em",
					padding: "1em",
					height: "100%",
					maxWidth: 1200,
					width: "100%",
					backgroundColor: !isLaptop ? "#E6F1EE" : "white",
				}}
			>
				<Box
					display="flex"
					flex={6}
					justifyContent="center"
					alignItems="center"
				>
					<Box display="flex" width="60%" height="60%">
						<img
							src={businessPerson}
							width="100%"
							height="100%"
							viewBox="0 0 64 64"
						></img>
					</Box>
				</Box>
				<Box
					flex={6}
					display="flex"
					justifyContent="center"
					flexDirection="column"
					gap={3}
				>
					<Typography variant="h5" fontWeight={100}>
						Thinking of buying or selling?
					</Typography>
					<Typography
						display={isLaptop ? "none" : "block"}
						variant="body1"
						fontWeight={100}
					>
						Explore our guide to unveil the keys to successful property
						transactions. From understanding market trends to unlocking the
						secrets of a hassle-free sale, we provide insights that elevate your
						property journey. Discover the art of negotiation, stay informed
						about the latest listings, and make confident decisions every step
						of the way
					</Typography>
					<Button
						sx={{
							backgroundColor: theme.palette.highLightColor.main,
							textTransform: "none",
						}}
					>
						<Typography fontWeight={100} variant={isLaptop ? "body2" : "h6"}>
							Property guide
						</Typography>
					</Button>
				</Box>
			</Paper>
		</Box>
	);
};

export default Guide;
