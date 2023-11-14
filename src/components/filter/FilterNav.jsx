import React, { useEffect, useState } from "react";

import {
	Grid,
	MenuItem,
	FormControl,
	Select,
	OutlinedInput,
} from "@mui/material";

import {
	filterRadius,
	filterAddedToSite,
	filterMaxBed,
	filterMaxPrice,
	filterMinBed,
	filterMinPrice,
	filterPropertyType,
} from "./filterValues/FilterValues";

// redux

import { useDispatch } from "react-redux";
import { setFilterParams } from "../../store/filterParams";
import useIsMount from "../utilities/useIsMount";
// filter nav for easy access in various pages
const FilterNav = ({ filterParamsState }) => {
	const isMount = useIsMount();
	const dispatch = useDispatch();
	const [allValues, setAllValues] = useState({
		radius: filterParamsState.radius || "0.0",
		minPrice: filterParamsState.minPrice || "",
		maxPrice: filterParamsState.maxPrice || "",
		minBedrooms: filterParamsState.minBedrooms || "",
		maxBedrooms: filterParamsState.maxBedrooms || "",
		propertyType: filterParamsState.propertyType || "any",
		addedToSite: filterParamsState.addedToSite || "",
	});
	console.log(allValues);
	const handleChange = e => {
		setAllValues(prev => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	useEffect(() => {
		if (isMount) {
			console.log("initial render filter");
		} else {
			dispatch(setFilterParams(allValues));
		}
	}, [allValues]);
	return (
		<Grid container spacing={1} sx={{ margin: 0 }}>
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

			<Grid item xs>
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
			<Grid item xs>
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

			<Grid item xs>
				<FormControl fullWidth>
					<Select
						name="minRooms"
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
			<Grid item xs>
				<FormControl fullWidth>
					<Select
						name="maxRooms"
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

			<Grid item xs>
				<FormControl fullWidth>
					<Select
						name="type"
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

			<Grid item xs paddingRight={2}>
				<FormControl fullWidth>
					<Select
						name="time"
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
	);
};

export default FilterNav;
