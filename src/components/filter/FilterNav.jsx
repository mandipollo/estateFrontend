import React, { useState } from "react";

import {
	Grid,
	MenuItem,
	FormControl,
	Select,
	OutlinedInput,
} from "@mui/material";

// filter nav for easy access in various pages
const FilterNav = () => {
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
						<MenuItem value={0}>This area only</MenuItem>
						<MenuItem value={0.25}>Within 1/4 mile</MenuItem>
						<MenuItem value={1}>Within 1 mile</MenuItem>
						<MenuItem value={5}>Within 5 miles</MenuItem>
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
						<MenuItem value={0}>Min Price</MenuItem>
						<MenuItem value={50000}>50000</MenuItem>
						<MenuItem value={100000}>100000</MenuItem>
						<MenuItem value={200000}>200000</MenuItem>
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
						<MenuItem value={0}>Max Price</MenuItem>
						<MenuItem value={50000}>50000</MenuItem>
						<MenuItem value={100000}>100000</MenuItem>
						<MenuItem value={500000}>500000</MenuItem>
					</Select>
				</FormControl>
			</Grid>

			<Grid item xs>
				<FormControl fullWidth>
					<Select
						name="minRooms"
						input={<OutlinedInput sx={{ fontSize: "0.8rem" }} />}
						value={allValues.minRooms}
						onChange={handleChange}
						displayEmpty
						size="small"
					>
						<MenuItem value={0}>Min Beds</MenuItem>
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={3}>3</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs>
				<FormControl fullWidth>
					<Select
						name="maxRooms"
						input={<OutlinedInput sx={{ fontSize: "0.8rem" }} />}
						value={allValues.maxRooms}
						onChange={handleChange}
						displayEmpty
						size="small"
					>
						<MenuItem value={0}>Max Beds</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={3}>3</MenuItem>
						<MenuItem value={5}>5</MenuItem>
					</Select>
				</FormControl>
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

			<Grid item xs paddingRight={2}>
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
	);
};

export default FilterNav;
