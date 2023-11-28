import { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Drawer from "@mui/material/Drawer";
import theme from "../../theme";
import {
	Grid,
	Box,
	Select,
	FormControl,
	MenuItem,
	OutlinedInput,
	Typography,
	FormControlLabel,
	Checkbox,
	IconButton,
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
import StyledGrid, { StyledGridDrawer } from "../styledComponents/StyledGrid";

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
				width: "100vw",
				height: {
					xs: "90vh",
					md: 450,
				},
			}}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<Grid container padding="10px" gap={1}>
				<Grid container item xs={12}>
					<StyledGridDrawer
						item
						container
						xs={12}
						md={5}
						points={theme.breakpoints.values.tablet}
					>
						<Grid xs={12} item justifyContent="flex-start" display="flex">
							<Typography variant="h6" fontWeight={100}>
								Price:
							</Typography>
						</Grid>
						<Grid
							container
							item
							xs={12}
							gap={1}
							flexDirection="row"
							justifyContent="space-between"
						>
							<Grid item xs={5.5}>
								<FormControl fullWidth>
									<Select
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
							</Grid>
							<Grid item xs={5.5}>
								<FormControl fullWidth>
									<Select
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
							</Grid>
						</Grid>
					</StyledGridDrawer>
				</Grid>
				<Grid container item xs={12}>
					<StyledGridDrawer
						item
						container
						xs={12}
						md={5}
						points={theme.breakpoints.values.md}
					>
						<Grid xs={12} item justifyContent="flex-start" display="flex">
							<Typography variant="h6" fontWeight={100}>
								Bedrooms:
							</Typography>
						</Grid>
						<Grid
							container
							item
							xs={12}
							flexDirection="row"
							justifyContent="space-between"
							gap={1}
						>
							<Grid item xs={5.5}>
								<FormControl fullWidth>
									<Select
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
							</Grid>
							<Grid item xs={5.5}>
								<FormControl fullWidth>
									<Select
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
							</Grid>
						</Grid>
					</StyledGridDrawer>
				</Grid>
				<Grid container item xs={12}>
					<StyledGridDrawer
						item
						container
						xs={12}
						md={5}
						gap={2}
						points={theme.breakpoints.values.laptop}
					>
						<Grid
							item
							justifyContent="center"
							alignItems="center"
							display="flex"
						>
							<Typography variant="h6" fontWeight={100}>
								Property Type:
							</Typography>
						</Grid>
						<Grid item xs>
							<FormControl fullWidth>
								<Select
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
						</Grid>
					</StyledGridDrawer>
				</Grid>
				<Grid container item xs={12}>
					<Grid item container xs={12} md={5} gap={2}>
						<Grid
							item
							justifyContent="center"
							alignItems="center"
							display="flex"
						>
							<Typography variant="h6" fontWeight={100}>
								Added to Site:
							</Typography>
						</Grid>
						<Grid item xs>
							<FormControl fullWidth>
								<Select
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
						</Grid>
					</Grid>
					<Grid
						item
						container
						xs={12}
						md={5}
						justifyContent={{ xs: "flex-start", md: "flex-end" }}
					>
						<FormControl>
							<FormControlLabel
								control={
									<Checkbox
										style={{ color: "black" }}
										name="myCheckbox"
										color="primary"
									/>
								}
								label={
									<Typography variant="body1">
										Include Under Offer,Sold STC
									</Typography>
								}
							/>
						</FormControl>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);

	return (
		<div>
			{["top"].map(anchor => (
				<React.Fragment key={anchor}>
					<IconButton
						variant="outlined"
						color="success"
						onClick={toggleDrawer(anchor, true)}
					>
						<FilterAltIcon />
					</IconButton>

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
