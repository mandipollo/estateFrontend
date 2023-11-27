import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
	Grid,
	FormLabel,
	MenuItem,
	Button,
	Typography,
	FormControl,
	Select,
	OutlinedInput,
} from "@mui/material";

// redux
import { setForSale, fetchForSale } from "../../store/forSale";
import { setFilterParams } from "../../store/filterParams";
import { useDispatch, useSelector } from "react-redux";

// radius values

import {
	filterRadius,
	filterMinPrice,
	filterMaxPrice,
	filterMinBed,
	filterMaxBed,
	filterPropertyType,
	filterAddedToSite,
} from "./filterValues/FilterValues";
const Filter = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		localStorage.setItem("page", "1");
	}, []);
	// retrieve location identifier from the redux store
	const locationIdentifier = useSelector(
		state => state.identifier.locationIdentifier
	);

	// params for filter
	const [allValues, setAllValues] = useState({
		radius: "0.0",
		minPrice: "",
		maxPrice: "",
		minBedrooms: "",
		maxBedrooms: "",
		propertyType: "any",
		addedToSite: "",
	});

	// a object is used to store for local state
	const handleChange = e => {
		setAllValues(prev => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	// fetch property sale data from backend , can pass params for filtering
	const handleForSale = async () => {
		dispatch(
			fetchForSale({
				regionIdentifier: locationIdentifier,
				searchRadius: allValues.radius,
				minPrice: allValues.minPrice,
				maxPrice: allValues.maxPrice,
				minBedrooms: allValues.minBedrooms,
				maxBedrooms: allValues.maxBedrooms,
				propertyType: allValues.propertyType,
				addedToSite: allValues.addedToSite,
			})
		);

		dispatch(setFilterParams(allValues));
		navigate("/propertyForSale");
	};
	return (
		<Grid container spacing={2} padding="20px 10px">
			<Grid container item xs={12} md={6} spacing={2}>
				<Grid container item spacing={2}>
					<Grid item xs={12} md={4}>
						<FormLabel>Search radius</FormLabel>
					</Grid>
					<Grid item xs>
						<FormControl fullWidth>
							<Select
								name="radius"
								input={<OutlinedInput sx={{ fontSize: "0.8rem" }} />}
								value={allValues.radius}
								onChange={handleChange}
								displayEmpty
								size="small"
							>
								{filterRadius.map((options, index) => (
									<MenuItem key={index} value={options.radiusValue}>
										{options.radius}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				<Grid container item spacing={2}>
					<Grid item xs={12} md={4}>
						<FormLabel>Price range (£)</FormLabel>
					</Grid>
					<Grid container spacing={1} item xs>
						<Grid item xs={6}>
							<FormControl fullWidth>
								<Select
									name="minPrice"
									input={<OutlinedInput sx={{ fontSize: "0.8rem" }} />}
									value={allValues.minPrice}
									onChange={handleChange}
									displayEmpty
									size="small"
								>
									{filterMinPrice.map((options, index) => (
										<MenuItem key={index} value={options.priceValue}>
											{options.price}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={6}>
							<FormControl fullWidth>
								<Select
									name="maxPrice"
									input={<OutlinedInput sx={{ fontSize: "0.8rem" }} />}
									value={allValues.maxPrice}
									onChange={handleChange}
									displayEmpty
									size="small"
								>
									{filterMaxPrice.map((options, index) => (
										<MenuItem key={index} value={options.priceValue}>
											{options.price}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				</Grid>
				<Grid container item spacing={2}>
					<Grid item xs={12} md={4}>
						<FormLabel>No. of bedrooms</FormLabel>
					</Grid>
					<Grid container spacing={1} item xs>
						<Grid item xs={6}>
							<FormControl fullWidth>
								<Select
									name="minBedrooms"
									input={<OutlinedInput sx={{ fontSize: "0.8rem" }} />}
									value={allValues.minBedrooms}
									onChange={handleChange}
									displayEmpty
									size="small"
								>
									{filterMinBed.map((options, index) => (
										<MenuItem key={index} value={options.bedroomValue}>
											{options.bedroom}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={6}>
							<FormControl fullWidth>
								<Select
									name="maxBedrooms"
									input={<OutlinedInput sx={{ fontSize: "0.8rem" }} />}
									value={allValues.maxBedrooms}
									onChange={handleChange}
									displayEmpty
									size="small"
								>
									{filterMaxBed.map((options, index) => (
										<MenuItem key={index} value={options.bedroomValue}>
											{options.bedroom}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid container item xs={12} md={6} spacing={2}>
				<Grid container item spacing={2}>
					<Grid item xs={12} md={6}>
						<FormLabel>Property type</FormLabel>
					</Grid>
					<Grid item xs>
						<FormControl fullWidth>
							<Select
								name="propertyType"
								input={<OutlinedInput sx={{ fontSize: "0.8rem" }} />}
								value={allValues.propertyType}
								onChange={handleChange}
								displayEmpty
								size="small"
							>
								{filterPropertyType.map((options, index) => (
									<MenuItem key={index} value={options.propertyValue}>
										{options.propertyName}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				<Grid container item spacing={2}>
					<Grid item xs={12} md={6}>
						<FormLabel>Added to site</FormLabel>
					</Grid>
					<Grid item xs>
						<FormControl fullWidth>
							<Select
								name="addedToSite"
								input={<OutlinedInput sx={{ fontSize: "0.8rem" }} />}
								value={allValues.addedToSite}
								onChange={handleChange}
								displayEmpty
								size="small"
							>
								{filterAddedToSite.map((options, index) => (
									<MenuItem key={index} value={options.addedToSiteValue}>
										{options.addedToSiteName}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				<Grid container item spacing={2}>
					<Grid item xs>
						<Button
							onClick={handleForSale}
							fullWidth
							sx={{
								textTransform: "none",
								color: "black",
								backgroundColor: "#00DFB6",
							}}
							size="large"
							variant="contained"
						>
							<Typography>Find properties</Typography>
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Filter;
