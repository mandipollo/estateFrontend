import React, { useEffect, useState } from "react";
import axios from "axios";
import theme from "../../theme";

import {
	Grid,
	MenuItem,
	FormControl,
	Select,
	OutlinedInput,
	Box,
	useMediaQuery,
} from "@mui/material";

import {
	filterRadius,
	filterMaxBed,
	filterMaxPrice,
	filterMinBed,
	filterMinPrice,
	filterPropertyType,
} from "./filterValues/FilterValues";

// redux
import { setIdentifierHandler } from "../../store/identifier";
import { useDispatch } from "react-redux";
import { setFilterParams } from "../../store/filterParams";
import useIsMount from "../utilities/useIsMount";
import TemporaryDrawer from "./DrawerFilter";
import StyledGrid from "../styledComponents/StyledGrid";
import { ArrowDropDown } from "@mui/icons-material";
import AutocompleteSearch from "../search/AutocompleteSearch";
// filter nav for easy access in various pages
const FilterNav = ({ filterParamsState }) => {
	const dispatch = useDispatch();

	// autocomplete

	const [searchInput, setSearchInput] = useState("");
	const [suggestion, setSuggestion] = useState(null);
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
				}
			}
		}, 1000);

		return () => {
			clearTimeout(timeout);
		};
	}, [searchInput, dispatch]);

	// select value from the list

	const autoCompleteHandler = (event, value) => {
		setSuggestion(value);
	};

	// dispatch suggestion when chosen
	useEffect(() => {
		if (suggestion) {
			dispatch(setIdentifierHandler(suggestion));
		}
	}, [suggestion, dispatch]);

	//
	const isMount = useIsMount();

	const [allValues, setAllValues] = useState({
		radius: filterParamsState.radius || "0.0",
		minPrice: filterParamsState.minPrice || "",
		maxPrice: filterParamsState.maxPrice || "",
		minBedrooms: filterParamsState.minBedrooms || "",
		maxBedrooms: filterParamsState.maxBedrooms || "",
		propertyType: filterParamsState.propertyType || "any",
		addedToSite: filterParamsState.addedToSite || "",
	});

	const handleChange = e => {
		setAllValues(prev => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	useEffect(() => {
		if (isMount) {
			return;
		} else {
			dispatch(setFilterParams(allValues));
		}
	}, [allValues, dispatch]);

	return (
		// <Box sx={{ display: "flex", justifyContent: "center" }}>
		<Grid container item xs>
			<Grid item xs paddingLeft={1} alignItems="center" display="flex">
				<AutocompleteSearch
					widthvalue={300}
					searchInput={searchInput}
					searchInputHandler={searchInputHandler}
					options={options}
					autoCompleteHandler={autoCompleteHandler}
				/>
			</Grid>
			<StyledGrid points={theme.breakpoints.values.tablet} item xs>
				<FormControl fullWidth>
					<Select
						IconComponent={() => <ArrowDropDown style={{ color: "green" }} />}
						sx={{
							color: "white",
							fontWeight: 100,
							boxShadow: "none",
							".MuiOutlinedInput-notchedOutline": { border: 0 },
						}}
						name="radius"
						input={<OutlinedInput sx={{ fontSize: "0.8rem" }} />}
						value={allValues.radius}
						onChange={handleChange}
						displayEmpty
						size="medium"
					>
						{filterRadius.map((options, index) => (
							<MenuItem key={index} value={options.radiusValue}>
								{options.radius}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</StyledGrid>

			<StyledGrid points={theme.breakpoints.values.tablet} item xs>
				<FormControl fullWidth>
					<Select
						IconComponent={() => <ArrowDropDown style={{ color: "green" }} />}
						sx={{
							fontWeight: 100,
							color: "white",
							boxShadow: "none",
							".MuiOutlinedInput-notchedOutline": { border: 0 },
						}}
						name="minPrice"
						input={<OutlinedInput sx={{ fontSize: "0.8rem" }} />}
						value={allValues.minPrice}
						onChange={handleChange}
						displayEmpty
						size="medium"
					>
						{filterMinPrice.map((options, index) => (
							<MenuItem key={index} value={options.priceValue}>
								{options.price}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</StyledGrid>
			<StyledGrid points={theme.breakpoints.values.tablet} item xs>
				<FormControl fullWidth>
					<Select
						IconComponent={() => <ArrowDropDown style={{ color: "green" }} />}
						sx={{
							fontWeight: 100,
							color: "white",
							boxShadow: "none",
							".MuiOutlinedInput-notchedOutline": { border: 0 },
						}}
						name="maxPrice"
						input={<OutlinedInput sx={{ fontSize: "0.8rem" }} />}
						value={allValues.maxPrice}
						onChange={handleChange}
						displayEmpty
						size="medium"
					>
						{filterMaxPrice.map((options, index) => (
							<MenuItem key={index} value={options.priceValue}>
								{options.price}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</StyledGrid>

			<StyledGrid points={theme.breakpoints.values.lg} item xs>
				<FormControl fullWidth>
					<Select
						IconComponent={() => <ArrowDropDown style={{ color: "green" }} />}
						sx={{
							fontWeight: 100,
							color: "white",
							boxShadow: "none",
							".MuiOutlinedInput-notchedOutline": { border: 0 },
						}}
						name="minBedrooms"
						input={<OutlinedInput sx={{ fontSize: "0.8rem" }} />}
						value={allValues.minBedrooms}
						onChange={handleChange}
						displayEmpty
						size="medium"
					>
						{filterMinBed.map((options, index) => (
							<MenuItem key={index} value={options.bedroomValue}>
								{options.bedroom}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</StyledGrid>
			<StyledGrid points={theme.breakpoints.values.lg} item xs>
				<FormControl fullWidth>
					<Select
						IconComponent={() => <ArrowDropDown style={{ color: "green" }} />}
						sx={{
							fontWeight: 100,
							color: "white",
							boxShadow: "none",
							".MuiOutlinedInput-notchedOutline": { border: 0 },
						}}
						name="maxBedrooms"
						input={<OutlinedInput sx={{ fontSize: "0.8rem" }} />}
						value={allValues.maxBedrooms}
						onChange={handleChange}
						displayEmpty
						size="medium"
					>
						{filterMaxBed.map((options, index) => (
							<MenuItem key={index} value={options.bedroomValue}>
								{options.bedroom}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</StyledGrid>

			<StyledGrid points={theme.breakpoints.values.lg} item xs>
				<FormControl fullWidth>
					<Select
						IconComponent={() => <ArrowDropDown style={{ color: "green" }} />}
						sx={{
							fontWeight: 100,
							color: "white",
							boxShadow: "none",
							".MuiOutlinedInput-notchedOutline": { border: 0 },
						}}
						name="propertyType"
						input={<OutlinedInput sx={{ fontSize: "0.8rem" }} />}
						value={allValues.propertyType}
						onChange={handleChange}
						displayEmpty
						size="medium"
					>
						{filterPropertyType.map((options, index) => (
							<MenuItem key={index} value={options.propertyValue}>
								{options.propertyName}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</StyledGrid>

			<Grid
				item
				xs
				justifyContent={{ xs: "flex-end", md: "center" }}
				alignItems="center"
				display="flex"
			>
				<FormControl>
					<TemporaryDrawer handleChange={handleChange} allValues={allValues} />
				</FormControl>
			</Grid>
		</Grid>
		// </Box>
	);
};

export default FilterNav;
