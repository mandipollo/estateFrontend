import React from "react";
import { Box, Typography, Grid, Input, Button, Paper } from "@mui/material";
import { useSelector } from "react-redux/es/hooks/useSelector";
import CardProduct from "../components/card/CardProducts";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
// components
import FilterNav from "../components/filter/FilterNav";

const PropertyForSale = () => {
	const forSaleData = useSelector(state => state.forSale);
	const idendifierState = useSelector(state => state.identifier);
	console.log(idendifierState);
	console.log(forSaleData);
	return (
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			<Box
				sx={{
					display: "flex",
					backgroundColor: "#E9E9EB",
					width: "100%",
					flexDirection: "row",
				}}
			>
				<Box flex={3}>
					<Input />
				</Box>
				<Box flex={9}>
					<FilterNav />
				</Box>
			</Box>
			<Box sx={{ backgroundColor: "#E9E9EB", padding: "1rem  0 0 4rem" }}>
				<Typography variant="h6" color="text.secondary">
					Properties For Sale in {idendifierState.displayName}
				</Typography>
			</Box>

			<Grid container flex="1" gap={2} sx={{ backgroundColor: "#E9E9EB" }}>
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
						<CardProduct
							key={item.id}
							image={item.propertyImages.images}
							displayAddress={item.displayAddress}
							summary={item.summary}
							propertySubType={item.propertySubType}
							bedrooms={item.bedrooms}
							bathrooms={item.bathrooms}
							displayPrice={item.price.displayPrices[0].displayPrice}
							customer={item.customer.branchDisplayName}
							contactNo={item.customer.contactTelephone}
						/>
					))}
				</Grid>
				<Grid
					container
					item
					sx={{
						backgroundColor: "white",
						width: 400,
						display: {
							md: "none",
							lg: "flex",
						},
					}}
				>
					<Grid item>
						<Button
							startIcon={<ArrowRightAltOutlinedIcon />}
							size="medium"
							sx={{ textTransform: "none" }}
							variant="outlined"
							color="success"
						>
							<Typography variant="body2">
								See properties to rent in {idendifierState.displayName}
							</Typography>
						</Button>
					</Grid>
					<Grid item>
						<Button
							size="large"
							sx={{ textTransform: "none" }}
							variant="outlined"
							color="success"
						>
							<Typography variant="body2">
								See properties to rent in {idendifierState.displayName}
							</Typography>
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default PropertyForSale;
