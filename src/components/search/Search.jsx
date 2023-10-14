import React from "react";
import {
	Card,
	CardContent,
	TextField,
	Typography,
	Button,
	CardActions,
} from "@mui/material";

const Search = () => {
	return (
		<Card
			sx={{
				display: {
					sm: "none",
					md: "flex",
				},
				width: 600,
				zIndex: 1000,

				textAlign: "center",
				justifyContent: "center",
				backgroundColor: "#232D3F",
			}}
			variant="outlined"
		>
			<CardContent>
				<Typography sx={{ margin: 1 }} variant="h5" color="lightgreen">
					Find your forever home
				</Typography>
				<Typography sx={{ margin: 1 }} variant="h6" color="white">
					Search properties for sale and to rent in the UK
				</Typography>
				<TextField
					size="small"
					placeholder="e.g.'Waterloo', 'GU14 8TJ' "
					variant="filled"
					InputProps={{
						disableUnderline: true,
					}}
					sx={{
						backgroundColor: "white",
						width: 550,
						borderRadius: 2,
						margin: 1,
					}}
				></TextField>
				<CardActions sx={{ display: "flex", justifyContent: "center" }}>
					<Button
						sx={{ margin: 1, textTransform: "none" }}
						size="large"
						variant="contained"
						color="success"
					>
						<Typography>For Sale</Typography>
					</Button>
					<Button
						sx={{ margin: 1, textTransform: "none" }}
						size="large"
						variant="contained"
						color="success"
					>
						<Typography>To Rent</Typography>
					</Button>
				</CardActions>
			</CardContent>
		</Card>
	);
};

export default Search;
