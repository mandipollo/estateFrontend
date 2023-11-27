import React from "react";

import {
	Box,
	Checkbox,
	Grid,
	Typography,
	TextField,
	InputAdornment,
	FormControl,
	FormControlLabel,
} from "@mui/material";

import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
	return (
		<Box
			sx={{
				backgroundColor: "#1C3A32",
				width: "100vw",
				padding: "30px 0",
				display: "flex",
				justifyContent: "center",
				color: "white",
			}}
		>
			<Grid container padding="0 2em">
				<Grid container item sm={12} md={5} justifyContent="center">
					<Grid item>
						<Grid item>
							<Typography variant="h6" fontFamily="Ephesis">
								Get the latest updates for your area
							</Typography>
						</Grid>
						<Grid item mt={2}>
							<TextField
								sx={{
									"& .MuiInputLabel-root": { color: "white" },
									borderBottom: "1px solid white",
								}}
								InputProps={{
									disableUnderline: true,
									endAdornment: (
										<InputAdornment position="start">
											<Typography color="white"> Subscribe</Typography>
										</InputAdornment>
									),
									style: {
										color: "white",
									},
								}}
								variant="standard"
								fullWidth
								placeholder="Enter email here"
							></TextField>
						</Grid>
						<Grid item mt={2}>
							<FormControl>
								<FormControlLabel
									control={
										<Checkbox
											style={{ color: "white" }}
											name="myCheckbox"
											color="primary"
										/>
									}
									label={
										<Typography variant="body2">
											By checking the box, you agree that you are above at least
											18 years of age.
										</Typography>
									}
								/>
							</FormControl>
						</Grid>
						<Grid item mt={2} container spacing={5}>
							<Grid item>
								<YouTubeIcon
									sx={{
										":hover": {
											color: "red",
										},
									}}
								/>
							</Grid>
							<Grid item>
								<InstagramIcon
									sx={{
										":hover": {
											color: "red",
										},
									}}
								/>
							</Grid>
							<Grid item>
								<FacebookIcon
									sx={{
										":hover": {
											color: "skyblue",
										},
									}}
								/>
							</Grid>
						</Grid>
						<Grid mt={2} item>
							<Typography variant="body2">
								Estate, LLC. All Rights Reserved.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item md={7} sm={12}></Grid>
			</Grid>
		</Box>
	);
};

export default Footer;
