import { useState, useEffect } from "react";
import theme from "../theme";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";

// redux
import { useDispatch, useSelector } from "react-redux";

import { fetchForRent, resetStatus } from "../store/forRent";
// components
import FilterNav from "../components/filter/FilterNav";
import PaginationMui from "../components/pagination/Pagination";

// hooks
import useIsMount from "../components/utilities/useIsMount";

import Property from "../components/forRentProperty/Property";
import SnackbarNotify from "../components/SnackbarNotify";
import CircularIndeterminate from "../components/loading/CircularProgress";
import TownMap from "../components/map/Map";
import GeoCoding from "../components/map/GeoCoding";

const PropertyToRent = () => {
	const isLaptop = useMediaQuery(theme.breakpoints.up("laptop"));
	const [open, setOpen] = useState(false);
	const [latLng, setLatLng] = useState("");
	const handleOpen = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const dispatch = useDispatch();
	const isMount = useIsMount();

	const initialPage = parseInt(localStorage.getItem("page")) || 1;
	const [page, setPage] = useState(initialPage);

	const handlePageChange = (event, value) => {
		setPage(value);
	};
	const forRentData = useSelector(state => state.forRent.data.data);
	const forRentStatus = useSelector(state => state.forRent.status);
	const forRentError = useSelector(state => state.forRent.error);
	const identifierState = useSelector(state => state.identifier);
	const filterParamsState = useSelector(state => state.filter);

	// geocoding
	useEffect(() => {
		const getCodes = async () => {
			if (identifierState) {
				const geo = await GeoCoding(identifierState.displayName);
				setLatLng(geo);
			}
		};
		return () => getCodes();
	}, []);

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
	}, [page, filterParamsState, identifierState]);

	const prevPageHandler = () => {
		setPage(prev => prev - 1);
	};

	const nextPageHandler = () => {
		setPage(prev => prev + 1);
	};

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
		>
			{forRentStatus === "loading" && <CircularIndeterminate />}
			{forRentStatus === "failed" && <p>Error:{forRentError}</p>}
			{forRentStatus === "succeeded" && !forRentData && <h1>no data</h1>}
			{forRentStatus === "succeeded" && (
				<>
					<Box
						sx={{
							display: "flex",
							width: "100vw",
							backgroundColor: "#31304D",
							position: "sticky",
							top: 0,
							zIndex: 900,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Grid container maxWidth={1350} sx={{ display: "flex" }}>
							<FilterNav filterParamsState={filterParamsState} />
						</Grid>
					</Box>
					<SnackbarNotify
						message="Property has been saved"
						open={open}
						handleClose={handleClose}
					/>

					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							maxWidth: 1350,
						}}
					>
						<Box sx={{ padding: "1rem  0 0 4rem" }}>
							<Typography variant="h6" color="text.secondary">
								{identifierState.displayName}
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
								{forRentData.map(item => (
									<Property
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
										handleOpen={handleOpen}
									/>
								))}
								<PaginationMui
									prevPageHandler={prevPageHandler}
									nextPageHandler={nextPageHandler}
									page={page}
									handlePageChange={handlePageChange}
								/>
							</Grid>

							<Grid
								container
								item
								gap={2}
								sx={{
									width: 300,
									display: isLaptop ? "flex" : "none",
									justifyContent: "center",
									alignItems: "center",
									position: "sticky",
									top: 50,
									backgroundColor: "gray",
									height: "100%",
								}}
							>
								<Grid item>
									<TownMap center={latLng} />
								</Grid>
							</Grid>
						</Grid>
					</Box>
				</>
			)}
		</Box>
	);
};

export default PropertyToRent;
