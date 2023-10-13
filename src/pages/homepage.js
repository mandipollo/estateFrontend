import React from "react";
import { Box } from "@mui/material";
import Search from "../components/search/Search";

const Homepage = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}
		>
			<Box
				sx={{
					width: "100vw",
					height: "250px",
					backgroundImage: `url("https://media.rightmove.co.uk/hero_image.jpeg")`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			></Box>
			<Box sx={{ display: "flex", justifyContent: "center", mt: -15 }}>
				<Search />
			</Box>
		</Box>
	);
};

export default Homepage;
