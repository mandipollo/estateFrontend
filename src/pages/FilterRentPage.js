import React from "react";
import { Box, Typography } from "@mui/material";

// redux
import { useSelector } from "react-redux/es/hooks/useSelector";

// components

import FilterRent from "../components/filter/FilterRent";

const FilterRentPage = () => {
	const identifier = useSelector(state => state.identifier);

	return (
		<Box
			sx={{
				display: "flex",
				flex: 1,
				flexDirection: "column",
				paddingTop: 4,
				maxWidth: {
					md: 900,
				},
			}}
		>
			<Typography variant="h6">
				Property to rent in {identifier.displayName}
			</Typography>

			<form>
				<FilterRent />
			</form>
		</Box>
	);
};

export default FilterRentPage;
