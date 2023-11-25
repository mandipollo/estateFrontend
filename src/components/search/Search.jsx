import React, { useEffect, useState } from "react";
import axios from "axios";
import {
	Card,
	CardContent,
	Typography,
	Button,
	CardActions,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";

// state

import { useDispatch } from "react-redux";
import { setIdentifierHandler } from "../../store/identifier";

// components

import AutocompleteSearch from "./AutocompleteSearch";

// hooks

const Search = ({ propXs, propSm, title, description }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [searchInput, setSearchInput] = useState("");
	const [options, setOptions] = useState([]);

	const searchInputHandler = e => {
		setSearchInput(e.target.value);
	};

	const checkOnlySpace = input => {
		return /^\s*$/.test(input);
	};

	// autocomplete for sale

	useEffect(() => {
		const timeout = setTimeout(async () => {
			if (checkOnlySpace(searchInput)) {
				return;
			} else if (searchInput) {
				try {
					// setIdentifierHandler(searchInput);

					const response = await axios.get("http://localhost:5003/identifier", {
						params: {
							location: searchInput,
						},
					});

					const data = response.data.data;
					setOptions(data);
				} catch (error) {
					console.log(error);
				}
			}
		}, 100);

		return () => {
			clearTimeout(timeout);
		};
	}, [searchInput]);

	// select value from the list

	const autoCompleteHandler = (event, value) => {
		dispatch(setIdentifierHandler(value));
	};
	// submit and navigate user to the filter page

	const submitHandlerSale = e => {
		e.preventDefault();

		if (searchInput) {
			navigate("/filter");
		} else {
			console.log("search input empty");
		}
	};

	const submitHandlerRent = e => {
		e.preventDefault();

		if (searchInput) {
			navigate("/filterRent");
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
					{pathname !== "/toRent" && (
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
					)}

					{pathname !== "/forSale" && (
						<Button
							onClick={submitHandlerRent}
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
