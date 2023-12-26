import React, { useEffect, useState } from "react";
import { auth, database } from "../firebase.config";
import { update, ref } from "firebase/database";

import axios from "axios";
import { Box, Typography, Button, Grid } from "@mui/material";
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

import CardPropertyDescriptionRent from "../components/card/CardPropertyDescriptionRent";
import SnackbarNotify from "../components/SnackbarNotify";

const PropertyDetailRent = () => {
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
	const navigateBack = useNavigateBack();
	const { propertyId } = useParams();

	const [data, setData] = useState("");

	useEffect(() => {
		const fetchData = async () => {
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
		<StyledBox display="flex" flexDirection="column" width="100%" gap={2}>
			<SnackbarNotify
				message="Property successfully saved."
				open={open}
				handleClose={handleClose}
			/>
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
							<StyledBox width="80%" flexDirection="column" gap={1}>
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
								<CardPropertyDescriptionRent
									data={data}
									savePropertyHandler={savePropertyHandler}
								/>

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
									width="100%"
									borderBottom="1px solid rgba(0, 0, 0, 0.2)"
									borderTop="1px solid rgba(0, 0, 0, 0.2)"
									padding="1em 0"
								>
									<Grid container flexDirection="row">
										{data.data.infoReelItems.map((item, index) => (
											<Grid
												key={index}
												container
												flexDirection="column"
												item
												xs={3}
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

								<StyledBox flexDirection="column">
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
								<StyledBox flexDirection="column">
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
								<StyledBox flexDirection="column" gap={1}>
									<Typography variant="h6">
										{data.data.address.displayAddress}
									</Typography>
									<Box>
										<img
											alt="map"
											src={
												data.data.staticMapImgUrls.staticMapImgUrlDesktopLarge
											}
										></img>
									</Box>
								</StyledBox>
							</StyledBox>
						</>
					)}
				</Grid>
				<Grid container item xs={2}>
					<Grid item>
						<Typography>side bar</Typography>
					</Grid>
				</Grid>
			</Grid>
		</StyledBox>
	);
};

export default PropertyDetailRent;
