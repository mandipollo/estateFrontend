import React, { useEffect, useState } from "react";
import theme from "../theme";
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
import useNavigateBack from "../components/utilities/useNavigateBack";
// components

import StyledBox from "../components/styledComponents/StyledBox";
import CarousalImage from "../components/carousal/CarousalImage";
import CardPropertyDescription from "../components/card/CardPropertyDescription";
import CardMortgageCalculator from "../components/card/CardMortgageCalculator";
import CardSimiliarProp from "../components/card/CardSimiliarProp";
import CardCustomer from "../components/card/CardCustomer";
import SnackbarNotify from "../components/SnackbarNotify";

const PropertyDetail = () => {
	const [saved, setSaved] = useState(false);

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
	const ismd = useMediaQuery(theme.breakpoints.down("md"));
	const navigateBack = useNavigateBack();
	const { propertyId } = useParams();

	const [data, setData] = useState("");
	console.log(data);
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				"https://us-central1-estate-2aef8.cloudfunctions.net/forSaleDetail",
				{
					params: {
						id: propertyId,
					},
				}
			);
			const data = response.data;
			setData(data);
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
			sale: true,
		};

		console.log(propertyData);
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
		<Box display="flex" justifyContent="center">
			<SnackbarNotify
				open={open}
				handleClose={handleClose}
				message="Property saved successfully"
			/>
			<StyledBox
				maxWidth={1250}
				display="flex"
				flexDirection={"column"}
				width="100%"
				gap={2}
			>
				<Grid container>
					<Grid
						flex={1}
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						{data && (
							<>
								<StyledBox
									width={ismd ? "100%" : "80%"}
									flexDirection="column"
									gap={1}
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
										padding={ismd ? "0 1em" : "none"}
									>
										<CardPropertyDescription
											savePropertyHandler={savePropertyHandler}
											data={data}
										/>
									</StyledBox>

									<StyledBox
										borderBottom="1px solid rgba(0, 0, 0, 0.2)"
										borderTop="1px solid rgba(0, 0, 0, 0.2)"
										padding={ismd ? "1em" : "1em 0"}
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
										padding={ismd ? "0 1em" : "none"}
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
										padding={ismd ? "0 1em" : "none"}
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
										padding={ismd ? "0 1em" : "none"}
										flexDirection="column"
									>
										<Typography variant="h6">
											{data.data.address.displayAddress}
										</Typography>
										<Box display="flex" justifyContent={ismd ? "center" : null}>
											<img
												alt="map"
												src={
													!ismd
														? data.data.staticMapImgUrls
																.staticMapImgUrlDesktopSmall
														: data.data.staticMapImgUrls.staticMapImgUrlMobile
												}
											></img>
										</Box>
									</StyledBox>
									<StyledBox
										flexDirection="column"
										padding={ismd ? "0 1em" : "none"}
									>
										<CardMortgageCalculator
											propertyPrice={data.data.mortgageCalculator.price}
										/>
									</StyledBox>
								</StyledBox>
							</>
						)}
					</Grid>
					{!ismd && data && (
						<Grid container item xs={4}>
							<Grid item>
								<CardCustomer
									customer={data.data.customer}
									tele={data.data.contactInfo.telephoneNumbers.localNumber}
								/>
							</Grid>
						</Grid>
					)}
				</Grid>

				<StyledBox
					flexDirection="column"
					gap={2}
					borderTop="1px solid rgba(0,0,0,0.2)"
					borderBottom="1px solid rgba(0,0,0,0.2)"
					padding={ismd ? 1 : 4}
				>
					<Typography variant="h6">Similiar to this property</Typography>
					<CardSimiliarProp propertyId={propertyId} />
				</StyledBox>
			</StyledBox>
		</Box>
	);
};

export default PropertyDetail;
