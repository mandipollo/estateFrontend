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

// styled components
import StyledButton from "../styledComponents/StyledButton";
import StyledTypographyNav from "../styledComponents/StyledTypographyNav";

const pages = ["Buy", "Rent", "House prcies", "Find agents", "Commercial"];
const Navbar = () => {
	const [anchorNavEl, setAnchorNavEl] = useState(null);

	const handleOpenNavMenu = event => {
		setAnchorNavEl(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorNavEl(null);
	};
	return (
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
					<Box
						sx={{
							display: {
								xs: "none",
								md: "flex",
							},
							flex: 2,
							justifyContent: "center",
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
					</Box>
					{/* /*small screen */}
					<Box
						sx={{
							display: {
								xs: "flex",
								md: "none",
							},
							flex: 1,
							justifyContent: "center",
						}}
					>
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
							{pages.map(page => (
								<MenuItem>
									<StyledTypographyNav>{page}</StyledTypographyNav>
								</MenuItem>
							))}
						</Menu>

						<Box
							sx={{
								display: {
									xs: "flex",
									md: "none",
								},
								flex: 1,

								justifyContent: "center",
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
						</Box>
					</Box>

					{/*medium screen navitems */}
					<Box
						sx={{
							display: {
								xs: "none",
								md: "flex",
							},
							flex: 8,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						{pages.map(page => (
							<StyledButton>
								<StyledTypographyNav>{page}</StyledTypographyNav>
							</StyledButton>
						))}
					</Box>
					<Box
						sx={{
							display: "flex",
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
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;
