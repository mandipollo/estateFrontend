import React from "react";

import { Box, Typography } from "@mui/material";

// componenets
import Search from "../components/search/Search";
import StyledButton from "../components/styledComponents/StyledButton";

const ToRentPage = () => {
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
						sx={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
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