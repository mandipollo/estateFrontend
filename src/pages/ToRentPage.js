import React from "react";
import theme from "../theme";

import { Box, useMediaQuery } from "@mui/material";

// componenets
import Search from "../components/search/Search";

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
				<Box
					margin={isMd ? 0 : "1em 0"}
					sx={{ display: "flex", justifyContent: "center" }}
				>
					<Search
						title="UK properties for rent"
						description="Search using 'town name' or 'postcode'"
					/>
				</Box>
			</Box>
		</main>
	);
};

export default ToRentPage;
