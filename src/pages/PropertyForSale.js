import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Box, Typography, Grid, Input, Button } from "@mui/material";

import { useSelector } from "react-redux/es/hooks/useSelector";
import CardProduct from "../components/card/CardProducts";

// redux

import { setForSale } from "../store/forSale";
// components
import FilterNav from "../components/filter/FilterNav";
import PaginationMui from "../components/pagination/Pagination";

const PropertyForSale = () => {
	const dispatch = useDispatch();
	const [page, setPage] = useState(1);

	const handlePageChange = (event, value) => {
		setPage(value);
	};
	const forSaleData = useSelector(state => state.forSale.data);
	const identifierState = useSelector(state => state.identifier);
	console.log(forSaleData);

	useEffect(() => {
		const handleForSale = async () => {
			try {
				const response = await axios.get("http://localhost:5003/forSale", {
					params: {
						regionIdentifier: identifierState.locationIdentifier,
						page: page,
					},
				});

				const data = response.data;

				dispatch(setForSale(data));
			} catch (error) {
				console.log(error);
			}
		};

		handleForSale();
	}, [page]);
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
					Properties For Sale in {identifierState.displayName}
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
					<PaginationMui page={page} handlePageChange={handlePageChange} />
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
							Properties to rent in {identifierState.displayName}
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default PropertyForSale;
