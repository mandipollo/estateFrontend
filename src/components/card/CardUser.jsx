import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import theme from "../../theme";
import StyledButton from "../styledComponents/StyledButton";

const CardUser = () => {
	const isMd = useMediaQuery(theme.breakpoints.down("laptop"));
	return (
		<Box display="flex" sx={{ justifyContent: "center" }}>
			<Box
				sx={{
					display: "flex",
					borderRadius: "1em",
					padding: "1em",
					marginTop: "2em",
					height: "100%",
					maxWidth: 1200,
					width: "100%",
					backgroundColor: "#E6F1EE",
				}}
			>
				<Box flex={9} display={isMd ? "none" : "block"}>
					<Typography variant="h6" fontWeight={100}>
						Sign in to streamline your search
					</Typography>
					<Typography variant="body1" fontWeight={100}>
						Save properties, create alerts and keep track of the enquires you
						send to agents.
					</Typography>
				</Box>
				<Box
					display="flex"
					flex={3}
					justifyContent="center"
					alignItems="center"
				>
					<StyledButton
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
			</Box>
		</Box>
	);
};

export default CardUser;
