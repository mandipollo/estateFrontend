import React, { useState } from "react";

import {
	AppBar,
	Container,
	Toolbar,
	Typography,
	Box,
	IconButton,
	Menu,
	MenuItem,
} from "@mui/material";

//icons
import VillaIcon from "@mui/icons-material/Villa";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

// styled components
import StyledButton from "../styledComponents/StyledButton";
import StyledTypographyNav from "../styledComponents/StyledTypographyNav";
import StyledBox from "../styledComponents/StyledBox";

const pages = ["Buy", "Rent", "House prices", "Find agents", "Commercial"];
const Navbar = () => {
	const [anchorNavEl, setAnchorNavEl] = useState(null);

	const handleOpenNavMenu = event => {
		setAnchorNavEl(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorNavEl(null);
	};
	return (
		<header>
			<AppBar
				position="sticky"
				sx={{
					display: "flex",
					height: "4rem",
				}}
			>
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						{/* medium screen */}
						<StyledBox propSm="none" propMd="flex" propFlex="2">
							<Typography
								variant="h6"
								component="a"
								href="/"
								sx={{
									textDecoration: "none",
									color: "inherit",
									fontFamily: "monospace",
								}}
							>
								Estate
							</Typography>
							<VillaIcon sx={{ ml: 1, color: "#35A29F" }} />
						</StyledBox>
						{/* /*small screen */}
						<StyledBox propSm="flex" propMd="none" propFlex="1">
							<IconButton
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								size="large"
								onClick={handleOpenNavMenu}
							>
								<MenuIcon />
							</IconButton>
							{/*attach menuitem */}
							<Menu
								sx={{
									display: {
										xs: "block",
										md: "none",
									},
								}}
								anchorEl={anchorNavEl}
								keepMounted
								anchorOrigin={{
									horizontal: "left",
									vertical: "bottom",
								}}
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorNavEl)}
								onClose={handleCloseNavMenu}
							>
								{pages.map((page, index) => (
									<MenuItem key={index}>
										<StyledTypographyNav>{page}</StyledTypographyNav>
									</MenuItem>
								))}
							</Menu>

							<StyledBox
								propFlex="1"
								propSm="flex"
								propMd="none"
								sx={{
									alignItems: "center",
								}}
							>
								<Typography
									variant="h6"
									component="a"
									href="/"
									sx={{
										textDecoration: "none",
										color: "inherit",
										fontFamily: "monospace",
									}}
								>
									Estate
								</Typography>
								<VillaIcon color="success" sx={{ ml: 1 }} />
							</StyledBox>
						</StyledBox>

						{/*medium screen navitems */}
						<StyledBox
							propFlex="8"
							propSm="none"
							propMd="flex"
							sx={{
								alignItems: "center",
							}}
						>
							{pages.map((page, index) => (
								<StyledButton key={index}>
									<StyledTypographyNav>{page}</StyledTypographyNav>
								</StyledButton>
							))}
						</StyledBox>
						<StyledBox
							propSm="none"
							propMd="flex"
							sx={{
								flex: {
									md: 2,
								},
							}}
						>
							<StyledButton variant="outlined" color="success">
								<Typography variant="body1" color="black">
									Sign in
								</Typography>
							</StyledButton>
						</StyledBox>
						<StyledBox
							propSm="flex"
							propMd="none"
							sx={{
								flex: {
									md: 2,
								},
							}}
						>
							<StyledButton variant="outlined" color="success">
								<PersonIcon />
							</StyledButton>
						</StyledBox>
					</Toolbar>
				</Container>
			</AppBar>
		</header>
	);
};

export default Navbar;
