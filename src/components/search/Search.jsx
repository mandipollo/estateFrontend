import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import {
	Card,
	CardContent,
	Typography,
	Button,
	CardActions,
} from "@mui/material";

// state
import { setSearchInputHandler } from "../../store/searchInput";
import { setIdentifierHandler } from "../../store/identifier";

// components

import AutocompleteSearch from "./AutocompleteSearch";

const Search = ({ propXs, propSm, title, description }) => {
	const navigate = useNavigate();
	const [searchInput, setSearchInput] = useState("");
	const [anchorEl, setAnchorEl] = useState(null);

	const searchInputHandler = e => {
		setSearchInput(e.target.value);
	};

	const anchorElHandler = e => {
		setAnchorEl(e.currentTarget);
	};
	const anchorCloseHandler = () => {
		setAnchorEl(null);
	};

	// autocomplete

	useEffect(() => {
		const timeout = setTimeout(async () => {
			if (searchInput) {
				try {
					setSearchInputHandler(searchInput);
					// setIdentifierHandler(searchInput);

					const data = await axios.get("http://localhost:5002/identifier", {
						params: {
							location: searchInput,
						},
					});
					setIdentifierHandler(data);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			}
		}, 500);

		return () => {
			clearTimeout(timeout);
		};
	}, [searchInput]);
	// submit and navigate user to the filter page

	const submitHandlerSale = () => {};
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

				<AutocompleteSearch
					searchInput={searchInput}
					searchInputHandler={searchInputHandler}
				/>
				{/* 
				<StyledTextfield
					{...params}
					onChange={searchInputHandler}
					value={searchInput}
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
				></StyledTextfield> */}

				<CardActions sx={{ display: "flex", justifyContent: "center" }}>
					<Button
						onClick={submitHandlerSale}
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
