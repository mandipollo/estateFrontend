import React from "react";
import { Box, Typography } from "@mui/material";
import Search from "../components/search/Search";

const ForSale = () => {
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
							title="UK properties for sale"
							description="Search using 'town name' or 'postcode'"
						/>
					</Box>
				</section>
			</Box>
		</main>
	);
};

export default ForSale;
