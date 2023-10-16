import React from "react";
import { useLocation } from "react-router-dom";
import {
	Card,
	CardContent,
	TextField,
	Typography,
	Button,
	CardActions,
} from "@mui/material";

// components

import StyledTextfield from "../styledComponents/StyledTextfield";

const Search = ({ propXs, propSm, title, description }) => {
	// destructure pathname to conditionally render elements
	const { pathname } = useLocation();

	return (
		<Card
			sx={{
				display: { xs: propXs, sm: propSm, md: "flex" },
				width: {
					xs: "100vw",
					sm: 600,
				},
				zIndex: 1000,

				textAlign: "center",
				justifyContent: "center",
				backgroundColor: "#232D3F",
			}}
			variant="outlined"
		>
			<CardContent>
				<Typography sx={{ margin: 1, color: "#35A29F" }} variant="h5">
					{title}
				</Typography>
				<Typography sx={{ margin: 1 }} variant="h6" color="white">
					{description}
				</Typography>
				<StyledTextfield
					size="small"
					placeholder="e.g.'Waterloo','NW15', 'GU14 8TJ' or 'Farnborough' "
					variant="filled"
					InputProps={{
						disableUnderline: true,
						style: {
							textAlign: "center",
							paddingBottom: 10,
						},
					}}
					// sx={{
					// 	backgroundColor: "white",
					// 	width: {
					// 		xs: "90%",
					// 		sm: 550,
					// 	},
					// 	borderRadius: 2,
					// 	margin: 1,
					// }}
				></StyledTextfield>
				<CardActions sx={{ display: "flex", justifyContent: "center" }}>
					<Button
						sx={{
							margin: 1,
							textTransform: "none",
							color: "black",
							backgroundColor: "#35A29F",
						}}
						size="large"
						variant="contained"
					>
						<Typography>For Sale</Typography>
					</Button>

					{pathname !== "/forSale" && (
						<Button
							sx={{
								margin: 1,
								textTransform: "none",
								color: "black",
								backgroundColor: "#35A29F",
							}}
							size="large"
							variant="contained"
						>
							<Typography>To Rent</Typography>
						</Button>
					)}
				</CardActions>
			</CardContent>
		</Card>
	);
};

export default Search;
