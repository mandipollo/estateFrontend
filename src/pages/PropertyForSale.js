import { useState, useEffect } from "react";

import axios from "axios";

import { Box, Typography, Grid, Input, Button } from "@mui/material";

// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchForSale, resetStatus } from "../store/forSale";

// components
import FilterNav from "../components/filter/FilterNav";
import PaginationMui from "../components/pagination/Pagination";
import CardProduct from "../components/card/CardProducts";
// hooks
import useIsMount from "../components/utilities/useIsMount";
import TemporaryDrawer from "../components/filter/DrawerFilter";

const PropertyForSale = () => {
	const dispatch = useDispatch();
	const isMount = useIsMount();

	const initialPage = parseInt(localStorage.getItem("page")) || 1;
	const [page, setPage] = useState(initialPage);

	const handlePageChange = (event, value) => {
		setPage(value);
	};
	const forSaleData = useSelector(state => state.forSale.data.data);
	const forSaleStatus = useSelector(state => state.forSale.status);
	console.log(forSaleStatus);
	const forSaleError = useSelector(state => state.forSale.error);
	const identifierState = useSelector(state => state.identifier);
	const filterParamsState = useSelector(state => state.filter);

	// reset page when params change

	useEffect(() => {
		if (isMount) return;
		setPage(1);
	}, [filterParamsState]);
	// save page on localStorage

	useEffect(() => {
		if (isMount) return;

		localStorage.setItem("page", page.toString());
	}, [page]);

	// useEffect for page change
	useEffect(() => {
		// skip initial effect
		if (isMount) {
			return;
		} else {
			// effect when page changes

			dispatch(
				fetchForSale({
					regionIdentifier: identifierState.locationIdentifier,
					page: page,
					searchRadius: filterParamsState.radius,
					minPrice: filterParamsState.minPrice,
					maxPrice: filterParamsState.maxPrice,
					minBedrooms: filterParamsState.minBedrooms,
					maxBedrooms: filterParamsState.maxBedrooms,
					propertyType: filterParamsState.propertyType,
					addedToSite: filterParamsState.addedToSite,
				})
			);
			window.scrollTo({ top: 0, behavior: "smooth" });
			return () => {
				console.log("component unmounts");

				dispatch(resetStatus());
			};
		}
	}, [page, filterParamsState]);

	const prevPageHandler = () => {
		setPage(prev => prev - 1);
	};

	const nextPageHandler = () => {
		setPage(prev => prev + 1);
	};

	return (
		<Box sx={{ display: "flex", flexDirection: "column", width: "100vw" }}>
			<Grid
				container
				sx={{
					display: "flex",
					width: "100%",
					flexDirection: "row",
				}}
			>
				<Grid
					item
					xs
					justifyContent="center"
					alignItems="center"
					display="flex"
				>
					<Input />
				</Grid>
				<Grid item xs={9}>
					<FilterNav filterParamsState={filterParamsState} />
				</Grid>
			</Grid>
			<Box sx={{ padding: "1rem  0 0 4rem" }}>
				<Typography variant="h6" color="text.secondary">
					Properties For Sale in {identifierState.displayName}
				</Typography>
			</Box>
			<Grid container sx={{ alignItems: "flex-start" }}>
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
					{forSaleStatus === "loading" && <p>Loading....</p>}
					{forSaleStatus === "failed" && <p>Error:{forSaleError}</p>}
					{forSaleStatus === "succeeded" && (
						<>
							{forSaleData.map(item => (
								<CardProduct
									key={item.id}
									propertyId={item.id}
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
						</>
					)}
				</Grid>

				<Grid
					container
					item
					gap={2}
					sx={{
						width: 300,
						display: { xs: "none", sm: "none", md: "none", lg: "flex" },
						justifyContent: "center",
						alignItems: "center",
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
