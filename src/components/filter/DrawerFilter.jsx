import { useState } from "react";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import {
	Grid,
	Box,
	Select,
	FormControl,
	MenuItem,
	OutlinedInput,
} from "@mui/material";
import React from "react";

import {
	filterRadius,
	filterAddedToSite,
	filterMaxBed,
	filterMaxPrice,
	filterMinBed,
	filterMinPrice,
	filterPropertyType,
} from "./filterValues/FilterValues";

const TemporaryDrawer = ({ handleChange, allValues }) => {
	const [state, setState] = useState({
		top: false,
	});

	const toggleDrawer = (anchor, open) => event => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = anchor => (
		<Box
			sx={{
				width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
				height: 450,
			}}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<Grid container>
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
				<Grid item xs>
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
		</Box>
	);

	return (
		<div>
			{["top"].map(anchor => (
				<React.Fragment key={anchor}>
					<Button onClick={toggleDrawer(anchor, true)}>Filter</Button>
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
};

export default TemporaryDrawer;
