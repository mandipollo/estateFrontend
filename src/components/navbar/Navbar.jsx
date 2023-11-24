import React, { useState } from "react";
import { Link } from "react-router-dom";
import DrawerNavbar from "../carousal/DrawerNavbar";

import {
	AppBar,
	Container,
	Toolbar,
	Typography,
	IconButton,
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
		link: "toRent",
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
							<DrawerNavbar pages={pages} />
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
