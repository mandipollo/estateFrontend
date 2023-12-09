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
import StyledButton from "../styledComponents/StyledButton";

// hooks

const Search = ({ propXs, propSm, title, description }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [searchInput, setSearchInput] = useState("");
	const [selectedSuggestion, setSelectedSuggestion] = useState(null);
	const [error, setError] = useState(null);
	const [options, setOptions] = useState([]);

	const searchInputHandler = e => {
		setSearchInput(e.target.value);
	};

	const checkOnlySpace = input => {
		return /^\s*$/.test(input);
	};

	// suggestion

	useEffect(() => {
		const timeout = setTimeout(async () => {
			if (checkOnlySpace(searchInput)) {
				return;
			} else if (searchInput) {
				try {
					// setIdentifierHandler(searchInput);

					const response = await axios.get(
						"https://us-central1-estate-2aef8.cloudfunctions.net/identifier",
						{
							params: {
								location: searchInput,
							},
						}
					);

					const data = response.data.data;
					setOptions(data);
				} catch (error) {
					console.log(error);
					setError(error);
				}
			}
		}, 100);

		return () => {
			clearTimeout(timeout);
		};
	}, [searchInput]);

	// select value from the list

	const autoCompleteHandler = (event, value) => {
		setSelectedSuggestion(value);
	};

	// dispatch with the suggestion
	useEffect(() => {
		if (selectedSuggestion) {
			dispatch(setIdentifierHandler(selectedSuggestion));
		}
	});
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
				<Typography sx={{ margin: 1, color: "#01DEB6" }} variant="h5">
					{title}
				</Typography>
				<Typography sx={{ margin: 1 }} variant="body1" color="white">
					{description}
				</Typography>

				<AutocompleteSearch
					widthvalue={550}
					searchInput={searchInput}
					searchInputHandler={searchInputHandler}
					options={options}
					autoCompleteHandler={autoCompleteHandler}
				/>

				<CardActions sx={{ display: "flex", justifyContent: "center" }}>
					{pathname !== "/toRent" && (
						<StyledButton
							onClick={submitHandlerSale}
							sx={{
								backgroundColor: "#01DEB6",
							}}
							size="large"
							variant="contained"
						>
							<Typography>For Sale</Typography>
						</StyledButton>
					)}

					{pathname !== "/forSale" && (
						<StyledButton
							onClick={submitHandlerRent}
							sx={{
								backgroundColor: "#01DEB6",
							}}
							size="large"
							variant="contained"
						>
							<Typography>To Rent</Typography>
						</StyledButton>
					)}
				</CardActions>
			</CardContent>
		</Card>
	);
};

export default Search;
