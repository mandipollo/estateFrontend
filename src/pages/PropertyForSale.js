import { Box, Typography, Grid, Input, Button } from "@mui/material";

import { useSelector } from "react-redux/es/hooks/useSelector";
import CardProduct from "../components/card/CardProducts";

// components
import FilterNav from "../components/filter/FilterNav";
import PaginationMui from "../components/pagination/Pagination";
const PropertyForSale = () => {
	const forSaleData = useSelector(state => state.forSale.data);
	const idendifierState = useSelector(state => state.identifier);
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

			<Grid
				container
				sx={{ backgroundColor: "#E9E9EB", alignItems: "flex-start" }}
			>
				<Grid
					container
					item
					gap={3}
					sx={{
						justifyContent: "center",
						padding: "2rem 0 2rem 0",
					}}
					flex={1}
				>
					{forSaleData.map(item => (
						<CardProduct
							key={item.id}
							images={item.propertyImages.images}
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
					<PaginationMui />
				</Grid>
				<Grid
					container
					item
					gap={2}
					sx={{
						width: 300,
						display: {
							md: "none",
							lg: "flex",
						},
						justifyContent: "center",
						alignItems: "center",
						padding: "2rem 1rem",
					}}
				>
					<Grid item>
						<Button
							size="small"
							sx={{ textTransform: "none" }}
							variant="outlined"
							color="success"
							disableRipple
						>
							Properties to rent in {idendifierState.displayName}
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default PropertyForSale;
