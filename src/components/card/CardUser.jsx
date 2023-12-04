import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import theme from "../../theme";

const CardUser = () => {
	const isMd = useMediaQuery(theme.breakpoints.down("laptop"));
	return (
		<Box
			display="flex"
			padding="1em"
			margin="1em"
			borderRadius="1em"
			sx={{ backgroundColor: "#E6F1EE" }}
		>
			<Box flex={8} display={isMd ? "none" : "block"}>
				<Typography variant="h6" fontWeight={100}>
					Sign in to streamline your search
				</Typography>
				<Typography variant="body1" fontWeight={100}>
					Save properties, create alerts and keep track of the enquires you send
					to agents.
				</Typography>
			</Box>
			<Box flex={4} justifyContent="center" alignItems="center">
				<Button
					fullWidth
					variant="outlined"
					color="success"
					sx={{ backgroundColor: "white" }}
				>
					<Typography>Sign in or create an account</Typography>
				</Button>
			</Box>
		</Box>
	);
};

export default CardUser;
