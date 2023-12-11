import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import StyledButton from "../styledComponents/StyledButton";

const EmptySavedProperties = () => {
	return (
		<Grid item>
			<Card elevation={7}>
				<CardContent sx={{ margin: 2 }}>
					<Typography variant="h6">Saved properties</Typography>
				</CardContent>
				<CardContent
					sx={{
						backgroundColor: "#F2F1EB",
						margin: 2,
						borderRadius: "0.5em",
						justifyContent: "center",
						alignItems: "center",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<img
						src="https://www.svgrepo.com/show/500055/houses.svg"
						width="164"
						height="164"
						viewBox="0 0 64 64"
					/>
					<Typography fontFamily="ubuntu" variant="h6">
						Hit the ❤︎︎ to save your favourite properties and find them faster
						next time.
					</Typography>
					<Typography fontFamily="ubuntu" variant="body2">
						Your saved properties will appear here
					</Typography>
					<StyledButton size="large" sx={{ backgroundColor: "#01DEB6" }}>
						<Typography fontFamily="ubuntu">Find properties to save</Typography>
					</StyledButton>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default EmptySavedProperties;
