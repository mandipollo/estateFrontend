import React from "react";
import {
	AppBar,
	Container,
	Toolbar,
	Typography,
	Avatar,
	Button,
	Box,
} from "@mui/material";
import VillaIcon from "@mui/icons-material/Villa";

// styled components
import StyledButton from "../styledComponents/StyledButton";

const Navbar = () => {
	return (
		<AppBar position="static" sx={{ display: "flex" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ display: "flex", flex: 2, justifyContent: "center" }}>
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
						<VillaIcon sx={{ ml: 1 }} />
					</Box>
					<Box
						sx={{
							display: "flex",
							flex: 8,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<StyledButton>
							<Typography variant="body1" sx={{ m: 2 }}>
								Buy
							</Typography>
						</StyledButton>

						<StyledButton>
							<Typography variant="body1" sx={{ m: 2 }}>
								Rent
							</Typography>
						</StyledButton>

						<StyledButton>
							<Typography variant="body1" sx={{ m: 2 }}>
								Find agents
							</Typography>
						</StyledButton>
						<StyledButton>
							<Typography variant="body1" sx={{ m: 2 }}>
								House prices
							</Typography>
						</StyledButton>
					</Box>
					<Box sx={{ display: "flex", flex: 2 }}>
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
