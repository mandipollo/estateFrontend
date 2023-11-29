import React from "react";
import theme from "../theme";

import { Box, Typography, useMediaQuery } from "@mui/material";

// componenets
import Search from "../components/search/Search";
import StyledButton from "../components/styledComponents/StyledButton";

const ToRentPage = () => {
	const isMd = useMediaQuery(theme.breakpoints.down("md"));
	return (
		<main>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					flex: 1,
				}}
			>
				<section>
					<Box
						margin={isMd ? 0 : "1em 0"}
						sx={{ display: "flex", justifyContent: "center" }}
					>
						<Search
							title="UK properties for rent"
							description="Search using 'town name' or 'postcode'"
						/>
					</Box>
				</section>
				<section>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							margin: "20px 0",
						}}
					>
						<Typography variant="h5" sx={{ fontWeight: 500 }}>
							Explore more properties for rent
						</Typography>
						<Box>
							<StyledButton variant="h5">
								Commercial properties for rent
							</StyledButton>
							<StyledButton variant="h5">
								Overseas properties for rent
							</StyledButton>
							<StyledButton variant="h5">New homes for rent</StyledButton>
							<StyledButton variant="h5">Find estate agents</StyledButton>
						</Box>
					</Box>
				</section>
			</Box>
		</main>
	);
};

export default ToRentPage;
