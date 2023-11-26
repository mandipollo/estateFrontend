import { useState, useEffect } from "react";

import axios from "axios";

import { Box, Typography, Grid, Input, Button } from "@mui/material";

// redux
import { useDispatch, useSelector } from "react-redux";

import { fetchForRent, resetStatus } from "../store/forRent";
// components
import FilterNav from "../components/filter/FilterNav";
import PaginationMui from "../components/pagination/Pagination";
import CardProduct from "../components/card/CardProducts";
// hooks
import useIsMount from "../components/utilities/useIsMount";
import CardProductRent from "../components/card/CardProducsRent";

const PropertyToRent = () => {
	const dispatch = useDispatch();
	const isMount = useIsMount();

	const initialPage = parseInt(localStorage.getItem("page")) || 1;
	const [page, setPage] = useState(initialPage);

	const handlePageChange = (event, value) => {
		setPage(value);
	};
	const forRentData = useSelector(state => state.forRent.data.data);
	console.log(forRentData);
	const forRentStatus = useSelector(state => state.forRent.status);
	console.log(forRentStatus);
	const forRentError = useSelector(state => state.forRent.error);
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
				fetchForRent({
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
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			<Grid
				container
				sx={{
					display: "flex",
					width: "100%",
					flexDirection: "row",
				}}
			>
				<Grid item xs>
					<Input />
				</Grid>
				<Grid item xs={9}>
					<FilterNav filterParamsState={filterParamsState} />
				</Grid>
			</Grid>
			<Box sx={{ padding: "1rem  0 0 4rem" }}>
				<Typography variant="h6" color="text.secondary">
					Properties to Rent in {identifierState.displayName}
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
					{forRentStatus === "loading" && <p>Loading....</p>}
					{forRentStatus === "failed" && <p>Error:{forRentError}</p>}
					{forRentStatus === "succeeded" && (
						<>
							{forRentData.map(item => (
								<CardProductRent
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
							Properties for Sale in {identifierState.displayName}
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default PropertyToRent;