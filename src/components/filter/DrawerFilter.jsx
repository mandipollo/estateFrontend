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
	Button,
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
import { StyledGridDrawer } from "../styledComponents/StyledGrid";

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
		<Grid
			container
			sx={{
				maxWidth: 1350,
				margin: "0 auto",
				height: {
					xs: "90vh",
					md: 450,
				},
			}}

			// onKeyDown={toggleDrawer(anchor, false)}
		>
			<Grid item container padding="10px" gap={2}>
				<Grid container item xs={12}>
					<StyledGridDrawer
						item
						container
						xs={12}
						md={5}
						points={theme.breakpoints.values.tablet}
					>
						<Grid item xs={12}>
							<FormControl fullWidth>
								<Select
									name="minPrice"
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
					</StyledGridDrawer>
				</Grid>
				<Grid container item xs={12}>
					<StyledGridDrawer
						item
						container
						xs={12}
						md={5}
						points={theme.breakpoints.values.tablet}
						sx={{
							border: "1px dotted rgba(71, 78, 104, 0.5)",
							backgroundColor: "#F4F4F5",
							padding: "2em 0",
						}}
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
						points={theme.breakpoints.values.lg}
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
						points={theme.breakpoints.values.lg}
						sx={{
							border: "1px dotted rgba(71, 78, 104, 0.5)",
							backgroundColor: "#F4F4F5",
							padding: "2em 0",
						}}
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
			<Grid
				container
				xs={12}
				item
				display="flex"
				flexDirection="row"
				justifyContent="space-between"
			>
				<Grid
					sx={{ margin: "0 0 1em 4em", width: "10rem" }}
					item
					xs={5}
					alignItems="flex-end"
					display="flex"
				>
					<Button sx={{ width: "10rem" }} size="medium" variant="contained">
						<Typography>Clear</Typography>
					</Button>
				</Grid>
				<Grid
					item
					xs={5}
					justifyContent="flex-end"
					alignItems="flex-end"
					display="flex"
				>
					<Button
						sx={{ margin: "0 4em 1em 0", width: "10rem" }}
						onClick={toggleDrawer(anchor, false)}
						size="medium"
						color="success"
						variant="contained"
					>
						<Typography>Done</Typography>
					</Button>
				</Grid>
			</Grid>
		</Grid>
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
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
						PaperProps={{
							sx: {
								display: "block",
								justifyContent: "center",
								margin: "auto",
							},
						}}
					>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
};

export default TemporaryDrawer;
