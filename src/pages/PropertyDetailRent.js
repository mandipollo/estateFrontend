import React, { useEffect, useState } from "react";
import { auth, database } from "../firebase.config";
import { update, ref } from "firebase/database";

import axios from "axios";
import { Box, Typography, Button, Grid, useMediaQuery } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
// redux
import { useParams } from "react-router-dom";
// components
import useNavigateBack from "../components/utilities/useNavigateBack";
import StyledBox from "../components/styledComponents/StyledBox";
import CarousalImage from "../components/carousal/CarousalImage";

import PropertyForRent from "../components/forRentProperty/PropertyDetailRent";
import SnackbarNotify from "../components/SnackbarNotify";
import CircularIndeterminate from "../components/loading/CircularProgress";
import CardCustomer from "../components/card/CardCustomer";
import theme from "../theme";

const PropertyDetailRent = () => {
	const isLaptop = useMediaQuery(theme.breakpoints.down("laptop"));
	const [saved, setSaved] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [data, setData] = useState("");
	const [open, setOpen] = useState(false);

	const handleOpen = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const navigateBack = useNavigateBack();
	const { propertyId } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://us-central1-estate-2aef8.cloudfunctions.net/toRentDetail",
					{
						params: {
							id: propertyId,
						},
					}
				);
				const data = response.data;
				setData(data);
				setIsLoading(false);
			} catch (error) {
				console.log(error);
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [propertyId]);

	const savePropertyHandler = () => {
		const uid = auth.currentUser ? auth.currentUser.uid : null;

		const propertyData = {
			address: data.data.address.displayAddress,
			price: data.data.prices.primaryPrice,
			image: data.data.images[0].url,
			propertyType: data.data.propertySubType,
			bedrooms: data.data.bedrooms,
			bathrooms: data.data.bathrooms,
			summary: data.data.text.description,
			customerImage: data.data.customer.customerBannerAdProfileUrl,
			contactNo: data.data.contactInfo.telephoneNumbers.localNumber,
			propertyId: data.data.id,
			sale: false,
		};

		if (uid) {
			update(
				ref(database, `users/${uid}/savedProperties/${propertyId}`),
				propertyData
			);
			setSaved(!saved);
			handleOpen(true);
		}
	};

	return (
		<>
			{isLoading ? (
				<CircularIndeterminate />
			) : (
				<Box padding="2em">
					<SnackbarNotify
						message="Property successfully saved."
						open={open}
						handleClose={handleClose}
					/>

					{error && <p>{error}</p>}
					{data && !error && (
						<StyledBox
							paddingBottom="2em"
							maxWidth={1350}
							display="flex"
							flexDirection={"column"}
						>
							<Grid container gap={2}>
								<Grid
									item
									flex={1}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<StyledBox
										flexDirection="column"
										gap={1}
										padding={isLaptop ? "0 1em" : "none"}
									>
										<Box width="100%" alignItems="flex-start" padding="1em 0">
											<Button
												onClick={navigateBack}
												disableRipple
												startIcon={<ArrowBackIcon />}
												variant="text"
												color="success"
												sx={{
													textTransform: "none",
												}}
											>
												<Typography variant="body1">
													Back to search results
												</Typography>
											</Button>
										</Box>
										<StyledBox width="100%" alignItems="flex-start">
											<CarousalImage data={data} />
										</StyledBox>
										<StyledBox
											flexDirection="column"
											// padding={isLaptop ? "0 1em" : "none"}
										>
											<PropertyForRent
												data={data}
												savePropertyHandler={savePropertyHandler}
											/>
										</StyledBox>

										<StyledBox
											padding="1em 0"
											borderTop="1px solid rgba(0, 0, 0, 0.2)"
											flexDirection="column"
										>
											<Typography variant="h6">Letting details</Typography>
											<Grid container gap={1}>
												<Grid xs={3} item>
													<Typography variant="body2" fontWeight={100}>
														Deposit:
													</Typography>
													<Typography variant="body2" fontWeight={100}>
														{data.data.lettings.deposit}
													</Typography>
												</Grid>
												<Grid xs={3} item>
													<Typography variant="body2" fontWeight={100}>
														Furnish type:
													</Typography>
													<Typography variant="body2" fontWeight={100}>
														{data.data.lettings.furnishType}
													</Typography>
												</Grid>
												<Grid xs={3} item>
													<Typography variant="body2" fontWeight={100}>
														Let available date:
													</Typography>
													<Typography variant="body2" fontWeight={100}>
														{data.data.lettings.letAvailableDate}
													</Typography>
												</Grid>
											</Grid>
										</StyledBox>

										<StyledBox
											borderBottom="1px solid rgba(0, 0, 0, 0.2)"
											borderTop="1px solid rgba(0, 0, 0, 0.2)"
											padding={isLaptop ? "1em" : "1em 0"}
										>
											<Grid container flexDirection="row" gap={1}>
												{data.data.infoReelItems.map((item, index) => (
													<Grid
														key={index}
														container
														flexDirection="column"
														item
														xs={5}
														md={3}
													>
														<Grid item>
															<Typography variant="body1" fontWeight={100}>
																{item.title}
															</Typography>
														</Grid>
														<Grid item flexDirection="row" display="flex">
															{index === 0 && <HomeOutlinedIcon />}
															{index === 1 && <BedOutlinedIcon />}
															{index === 2 && <BathroomOutlinedIcon />}

															<Typography variant="body1">
																{item.primaryText}
															</Typography>
														</Grid>
													</Grid>
												))}
											</Grid>
										</StyledBox>

										<StyledBox
											padding={isLaptop ? "0 1em" : "none"}
											flexDirection="column"
										>
											<Typography variant="h6">Key features</Typography>
											<Grid container gap={1}>
												{data.data.keyFeatures.map((item, index) => (
													<Grid key={index} xs={5} item>
														<Typography variant="body2" fontWeight={100}>
															{item}
														</Typography>
													</Grid>
												))}
											</Grid>
										</StyledBox>
										<StyledBox
											padding={isLaptop ? "0 1em" : "none"}
											flexDirection="column"
										>
											<Typography variant="h6">Property description</Typography>
											<Typography
												variant="body2"
												fontWeight={400}
												style={{ whiteSpace: "pre-line" }}
												dangerouslySetInnerHTML={{
													__html: data.data.text.description,
												}}
											/>
										</StyledBox>
										<StyledBox
											gap={1}
											padding={isLaptop ? "0 1em" : "none"}
											flexDirection="column"
										>
											<Typography variant="h6">
												{data.data.address.displayAddress}
											</Typography>
											<Box>
												<img
													alt="map"
													width="100%"
													height="100%"
													src={
														!isLaptop
															? data.data.staticMapImgUrls
																	.staticMapImgUrlDesktopSmall
															: data.data.staticMapImgUrls.staticMapImgUrlMobile
													}
												></img>
											</Box>
										</StyledBox>
									</StyledBox>
								</Grid>

								<Grid display={isLaptop ? "none" : "block"} item xs={4}>
									<CardCustomer
										customer={data.data.customer}
										tele={data.data.contactInfo.telephoneNumbers.localNumber}
									/>
								</Grid>
							</Grid>
						</StyledBox>
					)}
				</Box>
			)}
		</>
	);
};

export default PropertyDetailRent;
