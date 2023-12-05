import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import theme from "../../theme";

const CardUser = () => {
	const isMd = useMediaQuery(theme.breakpoints.down("laptop"));
	return (
		<Box display="flex" sx={{ justifyContent: "center" }}>
			<Box
				sx={{
					display: "flex",
					borderRadius: "1em",
					padding: "1em",
					margin: "1em",
					height: "100%",
					maxWidth: 1200,
					width: "100%",
					backgroundColor: "#E6F1EE",
				}}
			>
				<Box flex={8} display={isMd ? "none" : "block"}>
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
					flex={4}
					justifyContent="center"
					alignItems="center"
				>
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
		</Box>
	);
};

export default CardUser;
