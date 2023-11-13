import { useState, useEffect, useRef } from "react";

import axios from "axios";

import { Box, Typography, Grid, Input, Button } from "@mui/material";

// redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { setForSale } from "../store/forSale";
// components
import FilterNav from "../components/filter/FilterNav";
import PaginationMui from "../components/pagination/Pagination";
import CardProduct from "../components/card/CardProducts";

const PropertyForSale = () => {
	const dispatch = useDispatch();
	const [renderCount, setRenderCount] = useState(0);
	const [page, setPage] = useState(1);
	const [propertyData, setPropertyData] = useState(null);
	const [identifier, setIdentifier] = useState(null);
	const [isLoading, setIsloading] = useState(true);
	const shouldSkipInitial = useRef(true);

	const handlePageChange = (event, value) => {
		setPage(value);
	};
	const forSaleData = useSelector(state => state.forSale.data);
	const identifierState = useSelector(state => state.identifier);

	// render count

	useEffect(() => {
		setRenderCount(prev => prev + 1);
		console.log(renderCount);
	}, []);
	// useEffect for property data

	useEffect(() => {
		try {
			if (forSaleData && identifierState) {
				setPropertyData(forSaleData);
				setIdentifier(identifierState);
				setIsloading(false);
				console.log("initial data");
			}
		} catch (error) {
			console.log(error);
		}
	}, []);

	console.log(propertyData);
	// useEffect for page change
	useEffect(() => {
		// skip initial effect
		if (shouldSkipInitial.current) {
			shouldSkipInitial.current = false;
			return;
		}

		// effect when page changes
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
				console.log("useEffect");
			} catch (error) {
				console.log(error);
			} finally {
				window.scrollTo({ top: 0 });
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

			{!isLoading && (
				<Box sx={{ backgroundColor: "#E9E9EB", padding: "1rem  0 0 4rem" }}>
					<Typography variant="h6" color="text.secondary">
						Properties For Sale in {identifier.displayName}
					</Typography>
				</Box>
			)}
			{!isLoading && (
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
							{propertyData.map(item => (
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
							<PaginationMui page={page} handlePageChange={handlePageChange} />
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
								Properties to rent in {identifier.displayName}
							</Button>
						</Grid>
					</Grid>
				</Grid>
			)}
		</Box>
	);
};

export default PropertyForSale;
