import React from "react";
import { Box, Typography } from "@mui/material";

// state
import { useSelector } from "react-redux/es/hooks/useSelector";

// components
import Filter from "../components/filter/Filter";

const FilterPage = () => {
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
				Property for sale in {identifier.displayName}
			</Typography>

			<form>
				<Filter />
			</form>
		</Box>
	);
};

export default FilterPage;
