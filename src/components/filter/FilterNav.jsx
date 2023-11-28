import React, { useEffect, useState } from "react";
import theme from "../../theme";

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
import TemporaryDrawer from "./DrawerFilter";
import StyledGrid from "../styledComponents/StyledGrid";
import { ArrowDropDown } from "@mui/icons-material";
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
	}, [allValues]);

	return (
		<Grid container>
			<Grid item xs>
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
			</Grid>

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

			<StyledGrid points={theme.breakpoints.values.md} item xs>
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
			<StyledGrid points={theme.breakpoints.values.md} item xs>
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

			<StyledGrid points={theme.breakpoints.values.laptop} item xs>
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
						name="addedToSite"
						input={<OutlinedInput sx={{ fontSize: "0.8rem" }} />}
						value={allValues.addedToSite}
						onChange={handleChange}
						displayEmpty
						size="medium"
					>
						{filterAddedToSite.map((options, index) => (
							<MenuItem key={index} value={options.addedToSiteValue}>
								{options.addedToSiteName}
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
	);
};

export default FilterNav;
