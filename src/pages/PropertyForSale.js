import React from "react";
import { Box, Typography, Grid, Autocomplete } from "@mui/material";

// components
import FilterNav from "../components/filter/FilterNav";
import CardProducts from "../components/card/CardProducts";

//state
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import Search from "../components/search/Search";

const PropertyForSale = () => {
	const forSaleData = useSelector(state => state.forSale);
	console.log(forSaleData);
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
					{forSaleData.map(item => (
						<CardProducts
							key={item.id}
							image={item.propertyImages.mainImageSrc}
							displayAddress={item.displayAddress}
							summary={item.summary}
							propertySubType={item.propertySubType}
							bedrooms={item.bedrooms}
							bathrooms={item.bathrooms}
							displayPrice={item.price.displayPrices[0].displayPrice}
						/>
					))}
				</Grid>
				<Grid container item xs={3}>
					<Typography>Helper div</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default PropertyForSale;
