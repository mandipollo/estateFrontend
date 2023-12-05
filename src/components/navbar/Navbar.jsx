import React from "react";
import { Link } from "react-router-dom";
import DrawerNavbar from "../carousal/DrawerNavbar";

import { AppBar, Container, Toolbar, Typography } from "@mui/material";

//icons
import VillaIcon from "@mui/icons-material/Villa";

// styled components
import StyledButton from "../styledComponents/StyledButton";
import StyledTypographyNav from "../styledComponents/StyledTypographyNav";
import StyledBox from "../styledComponents/StyledBox";
import UserDrawer from "../user/UserDrawer";

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
				<Container sx={{ height: "100%", maxWidth: 1200, width: "100%" }}>
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
							<VillaIcon sx={{ ml: 1, mt: 0.4, color: "#01DEB6" }} />
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
								<VillaIcon sx={{ ml: 1, color: "#01DEB6" }} />
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
							<UserDrawer />
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
							<UserDrawer />
						</StyledBox>
					</Toolbar>
				</Container>
			</AppBar>
		</header>
	);
};

export default Navbar;
