import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const Search = () => {
	return (
		<Card
			sx={{
				display: "flex",
				maxWidth: 400,
				zIndex: 1000,
				display: "flex",
				textAlign: "center",
				justifyContent: "center",
				backgroundColor: "#4D4C7D",
			}}
			variant="outlined"
		>
			<CardContent>
				<Typography variant="h4" color="green">
					Find your forever home.
				</Typography>
				<Typography variant="h6" color="white">
					Search for properties to buy or rent.
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Search;
