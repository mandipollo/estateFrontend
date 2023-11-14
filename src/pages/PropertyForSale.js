import { useState, useEffect } from "react";

import axios from "axios";

import { Box, Typography, Grid, Input, Button } from "@mui/material";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setForSale } from "../store/forSale";
import { setFilterParams } from "../store/filterParams";
// components
import FilterNav from "../components/filter/FilterNav";
import PaginationMui from "../components/pagination/Pagination";
import CardProduct from "../components/card/CardProducts";
// hooks
import useIsMount from "../components/utilities/useIsMount";

const PropertyForSale = () => {
	const dispatch = useDispatch();
	const isMount = useIsMount();

	const initialPage = parseInt(localStorage.getItem("page")) || 1;
	const [page, setPage] = useState(initialPage);

	const handlePageChange = (event, value) => {
		setPage(value);
	};
	const forSaleData = useSelector(state => state.forSale.data);
	const identifierState = useSelector(state => state.identifier);
	const filterParamsState = useSelector(state => state.filter);
	console.log(filterParamsState);
	// save page on localStorage

	useEffect(() => {
		localStorage.setItem("page", page.toString());
	}, [page]);
	// useEffect for page change
	useEffect(() => {
		// skip initial effect
		if (isMount) {
			console.log("initial render");
		} else {
			// effect when page changes
			const handleForSale = async () => {
				try {
					console.log("fetch started");
					const response = await axios.get("http://localhost:5003/forSale", {
						params: {
							regionIdentifier: identifierState.locationIdentifier,
							page: page,
							searchRadius: filterParamsState.radius,
							minPrice: filterParamsState.minPrice,
							maxPrice: filterParamsState.maxPrice,
							minBedrooms: filterParamsState.minBedrooms,
							maxBedrooms: filterParamsState.maxBedrooms,
							propertyType: filterParamsState.propertyType,
							addedToSite: filterParamsState.addedToSite,
						},
					});
					const data = response.data;
					dispatch(setForSale(data));
					console.log("subsequent render");
					window.scrollTo({ top: 0, behavior: "smooth" });
				} catch (error) {
					console.log(error);
				}
			};
			handleForSale();
		}
	}, [page, filterParamsState]);

	const prevPageHandler = () => {
		setPage(prev => prev - 1);
	};

	const nextPageHandler = () => {
		setPage(prev => prev + 1);
	};
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
					<FilterNav filterParamsState={filterParamsState} />
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
				{forSaleData && (
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
								customerImage={item.customer.brandPlusLogoUrl}
								contactNo={item.customer.contactTelephone}
							/>
						))}
						<PaginationMui
							prevPageHandler={prevPageHandler}
							nextPageHandler={nextPageHandler}
							page={page}
							handlePageChange={handlePageChange}
						/>
					</Grid>
				)}

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
