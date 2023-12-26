import React from "react";
import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import theme from "../../../theme";
import StyledButton from "../../styledComponents/StyledButton";
import search from "../../../assets/svg/search.svg";
import { useDispatch } from "react-redux";
import { openDrawer } from "../../../store/drawer";

const CardUser = () => {
	const isLaptop = useMediaQuery(theme.breakpoints.down("laptop"));

	const dispatch = useDispatch();

	const handleOpenDrawer = () => {
		dispatch(openDrawer());
	};
	return (
		<Box display="flex" sx={{ justifyContent: "center", margin: "2em" }}>
			<Paper
				sx={{
					display: "flex",
					borderRadius: "1em",
					marginTop: "2em",
					height: "100%",
					maxWidth: 1200,
					width: "100%",
					backgroundColor: isLaptop ? "white" : "#E6F1EE",
					padding: "2em 1em",
				}}
			>
				<Box flex={!isLaptop && 9}>
					<Typography
						variant="h6"
						fontWeight={100}
						display={isLaptop ? "none" : "block"}
					>
						Sign in to streamline your search
					</Typography>
					<Typography
						variant="body1"
						fontWeight={100}
						display={isLaptop ? "none" : "block"}
					>
						Access house price estimates, save properties and searches, and get
						instant alerts for new listings and price reductions.
					</Typography>

					{isLaptop && (
						<img
							src={search}
							width={70}
							height={70}
							viewBox="0 0 100 100"
						></img>
					)}
				</Box>
				<Box
					display="flex"
					flex={3}
					justifyContent="center"
					alignItems="center"
				>
					<StyledButton
						onClick={handleOpenDrawer}
						sx={{
							backgroundColor: "white",
							padding: "10px 0",
						}}
						size="large"
						fullWidth
						variant="outlined"
						color="success"
					>
						<Typography variant="body2">
							Sign in or create an account
						</Typography>
					</StyledButton>
				</Box>
			</Paper>
		</Box>
	);
};

export default CardUser;
