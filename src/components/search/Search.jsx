import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import {
	Card,
	CardContent,
	Typography,
	Button,
	CardActions,
	Autocomplete,
} from "@mui/material";

// state

import { useDispatch } from "react-redux";
import { setIdentifierHandler } from "../../store/identifier";

// components

import AutocompleteSearch from "./AutocompleteSearch";

const Search = ({ propXs, propSm, title, description }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [searchInput, setSearchInput] = useState("");
	const [options, setOptions] = useState([]);

	const searchInputHandler = e => {
		console.log("searchInputHandler");
		setSearchInput(e.target.value);
	};

	// autocomplete

	useEffect(() => {
		const timeout = setTimeout(async () => {
			if (searchInput) {
				try {
					// setIdentifierHandler(searchInput);

					const response = await axios.get("http://localhost:5002/identifier", {
						params: {
							location: searchInput,
						},
					});

					const data = response.data.data;
					setOptions(data);

					console.log("data fetched");
				} catch (error) {
					console.log(error);
				}
			}
		}, 500);

		return () => {
			clearTimeout(timeout);
		};
	}, [searchInput]);

	// select value from the list

	const autoCompleteHandler = (event, value) => {
		dispatch(setIdentifierHandler(value));
		console.log(value);
	};
	// submit and navigate user to the filter page

	const submitHandlerSale = e => {
		e.preventDefault();
		console.log(searchInput);

		if (searchInput) {
			navigate("filter");
		} else {
			console.log("search input empty");
		}
	};
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
				<Typography sx={{ margin: 1 }} variant="body1" color="white">
					{description}
				</Typography>

				<AutocompleteSearch
					searchInput={searchInput}
					searchInputHandler={searchInputHandler}
					options={options}
					autoCompleteHandler={autoCompleteHandler}
				/>

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
