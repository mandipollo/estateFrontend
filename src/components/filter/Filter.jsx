import React, { useState } from "react";
import { Link } from "react-router-dom";
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

// state

import { useSelector } from "react-redux/es/hooks/useSelector";
const Filter = () => {
	const locationIdentifier = useSelector(
		state => state.identifier.locationIdentifier
	);
	console.log(locationIdentifier);
	const [allValues, setAllValues] = useState({
		radius: 0,
		minPrice: 0,
		maxPrice: 0,
		minRooms: 0,
		maxRooms: 0,
		type: "",
		time: 0,
	});
	const handleChange = e => {
		setAllValues(prev => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	return (
		<Grid container spacing={2} padding="20px 0 20px 0">
			<Grid container item xs={6} spacing={2}>
				<Grid container item spacing={2}>
					<Grid item xs={4}>
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
								<MenuItem value={0}>This area only</MenuItem>
								<MenuItem value={0.25}>Within 1/4 mile</MenuItem>
								<MenuItem value={1}>Within 1 mile</MenuItem>
								<MenuItem value={5}>Within 5 miles</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				<Grid container item spacing={2}>
					<Grid item xs={4}>
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
									<MenuItem value={0}>No min</MenuItem>
									<MenuItem value={50000}>50000</MenuItem>
									<MenuItem value={100000}>100000</MenuItem>
									<MenuItem value={200000}>200000</MenuItem>
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
									<MenuItem value={0}>No max</MenuItem>
									<MenuItem value={50000}>50000</MenuItem>
									<MenuItem value={100000}>100000</MenuItem>
									<MenuItem value={500000}>500000</MenuItem>
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				</Grid>
				<Grid container item spacing={2}>
					<Grid item xs={4}>
						<FormLabel>No. of bedrooms</FormLabel>
					</Grid>
					<Grid container spacing={1} item xs>
						<Grid item xs={6}>
							<FormControl fullWidth>
								<Select
									name="minRooms"
									input={<OutlinedInput sx={{ fontSize: "0.8rem" }} />}
									value={allValues.minRooms}
									onChange={handleChange}
									displayEmpty
									size="small"
								>
									<MenuItem value={0}>No min</MenuItem>
									<MenuItem value={1}>1</MenuItem>
									<MenuItem value={2}>2</MenuItem>
									<MenuItem value={3}>3</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={6}>
							<FormControl fullWidth>
								<Select
									name="maxRooms"
									input={<OutlinedInput sx={{ fontSize: "0.8rem" }} />}
									value={allValues.maxRooms}
									onChange={handleChange}
									displayEmpty
									size="small"
								>
									<MenuItem value={0}>No max</MenuItem>
									<MenuItem value={2}>2</MenuItem>
									<MenuItem value={3}>3</MenuItem>
									<MenuItem value={5}>5</MenuItem>
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid container item xs={6} spacing={2}>
				<Grid container item spacing={2}>
					<Grid item xs={4}>
						<FormLabel>Property type</FormLabel>
					</Grid>
					<Grid item xs>
						<FormControl fullWidth>
							<Select
								name="type"
								input={<OutlinedInput sx={{ fontSize: "0.8rem" }} />}
								value={allValues.type}
								onChange={handleChange}
								displayEmpty
								size="small"
							>
								<MenuItem value={""}>Any</MenuItem>
								<MenuItem value={"houses"}>Houses</MenuItem>
								<MenuItem value={"flat"}>Flat/Apartment</MenuItem>
								<MenuItem value={"bungalows"}>Bungalows</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				<Grid container item spacing={2}>
					<Grid item xs={4}>
						<FormLabel>Added to site</FormLabel>
					</Grid>
					<Grid item xs>
						<FormControl fullWidth>
							<Select
								name="time"
								input={<OutlinedInput sx={{ fontSize: "0.8rem" }} />}
								value={allValues.time}
								onChange={handleChange}
								displayEmpty
								size="small"
							>
								<MenuItem value={0}>Anytime</MenuItem>
								<MenuItem value={24}>Last 24 hours</MenuItem>
								<MenuItem value={3}>Last 3 days</MenuItem>
								<MenuItem value={5}>Last 5 days</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				<Grid container item spacing={2}>
					<Grid item xs={4}></Grid>
					<Grid item xs>
						<Link to="/propertyForSale">
							<Button
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
						</Link>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Filter;
