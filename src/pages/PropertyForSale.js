import React from "react";
import { Box, Typography, Grid } from "@mui/material";

import FilterNav from "../components/filter/FilterNav";
import CardProducts from "../components/card/CardProducts";

const PropertyForSale = () => {
	return (
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			<Box>
				<FilterNav />
			</Box>
			<Grid container flex="1" gap={2}>
				<Grid
					container
					item
					gap={3}
					sx={{
						justifyContent: "center",
						padding: "3rem 0 3rem 0",
					}}
					xs
				>
					<CardProducts />
					<CardProducts />
					<CardProducts />
				</Grid>
				<Grid container item xs={3} sx={{ backgroundColor: "gray" }}>
					helper
				</Grid>
			</Grid>
		</Box>
	);
};

export default PropertyForSale;
