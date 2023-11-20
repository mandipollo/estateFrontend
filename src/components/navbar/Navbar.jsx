import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
	AppBar,
	Container,
	Toolbar,
	Typography,
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

const pages = [
	{ label: "Buy", link: "forSale" },
	{
		label: "Rent",
		link: "forRent",
	},
	{ label: "House prices", link: "housePrices" },
	{
		label: "Find agents",
		link: "findAgents",
	},
	{
		label: "Commercial",
		link: "commercial",
	},
];
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
					height: "4rem",
				}}
			>
				<Container sx={{ maxWidth: "80em" }}>
					<Toolbar disableGutters>
						{/* medium screen */}
						<StyledBox propsm="none" propmd="flex" propflex="2">
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
						<StyledBox propsm="flex" propmd="none" propflex="1">
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
								{pages.map((item, index) => (
									<MenuItem key={index}>
										<Link
											style={{ textDecoration: "none", color: "inherit" }}
											to={item.link}
											key={index}
										>
											<StyledTypographyNav>{item.label}</StyledTypographyNav>
										</Link>
									</MenuItem>
								))}
							</Menu>

							<StyledBox
								propflex="1"
								propsm="flex"
								propmd="none"
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
							propflex="8"
							propsm="none"
							propmd="flex"
							sx={{
								alignItems: "center",
							}}
						>
							{/* {pages.map((page, index) => (
								<StyledButton key={index}>
									<StyledTypographyNav>{page}</StyledTypographyNav>
								</StyledButton>
							))} */}
							{pages.map((item, index) => (
								<Link
									style={{ textDecoration: "none", color: "inherit" }}
									to={item.link}
									key={index}
								>
									<StyledButton key={index}>
										<StyledTypographyNav>{item.label}</StyledTypographyNav>
									</StyledButton>
								</Link>
							))}
						</StyledBox>
						<StyledBox
							propsm="none"
							propmd="flex"
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
							propsm="flex"
							propmd="none"
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
