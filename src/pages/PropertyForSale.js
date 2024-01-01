import { useState, useEffect } from "react";

import { Box, Typography, Grid, Button, useMediaQuery } from "@mui/material";

// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchForSale, resetStatus } from "../store/forSale";

// components
import FilterNav from "../components/filter/FilterNav";
import PaginationMui from "../components/pagination/Pagination";
import CardProduct from "../components/card/CardProducts";
// hooks
import useIsMount from "../components/utilities/useIsMount";
import SnackbarNotify from "../components/SnackbarNotify";
import theme from "../theme";
import CircularIndeterminate from "../components/loading/CircularProgress";
import TownMap from "../components/map/Map";
import GeoCoding from "../components/map/GeoCoding";

const PropertyForSale = () => {
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
	const forSaleData = useSelector(state => state.forSale.data.data);
	const forSaleStatus = useSelector(state => state.forSale.status);
	const forSaleError = useSelector(state => state.forSale.error);
	const identifierState = useSelector(state => state.identifier);

	const filterParamsState = useSelector(state => state.filter);

	// geocoding

	useEffect(() => {
		const getCodes = async () => {
			if (identifierState) {
				const geo = await GeoCoding(identifierState.displayName);
				console.log(geo);
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
				handleClose={handleClose}
				open={open}
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
						Properties For Sale in {identifierState.displayName}
					</Typography>
				</Box>
				{forSaleStatus === "loading" && <CircularIndeterminate />}
				{forSaleStatus === "failed" && <p>Error:{forSaleError}</p>}
				{forSaleStatus === "succeeded" && !forSaleData && <h1>no data</h1>}
				{forSaleStatus === "succeeded" && forSaleData && (
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
							{forSaleData.map(item => (
								<CardProduct
									key={item.id}
									handleOpen={handleOpen}
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
								top: 100,
								backgroundColor: "gray",
								height: "100%",
							}}
						>
							<Grid item>
								<TownMap center={latLng} />
							</Grid>
						</Grid>
					</Grid>
				)}
			</Box>
		</Box>
	);
};

export default PropertyForSale;
