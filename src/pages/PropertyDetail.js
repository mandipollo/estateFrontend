import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";

import axios from "axios";
import {
	Box,
	Typography,
	Button,
	CardMedia,
	Grid,
	IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosOutlined from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewOutlined from "@mui/icons-material/ArrowBackIosNewOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CalculateIcon from "@mui/icons-material/Calculate";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
// redux
import { useParams } from "react-router-dom";
// components

const PropertyDetail = () => {
	const { propertyId } = useParams();

	const [data, setData] = useState("");
	console.log(data);
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get("http://localhost:5003/forSaleDetail", {
				params: {
					id: propertyId,
				},
			});
			const data = response.data;
			setData(data);
		};
		fetchData();
	}, []);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				justifyContent: "center",
				alignItems: "center",
				gap: 2,
			}}
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
							<Box sx={{ width: "80%" }}>
								<Box
									sx={{
										display: "flex",
										width: "100%",
										alignItems: "flex-start",
										padding: "1em 0",
									}}
								>
									<Button
										disableRipple
										startIcon={<ArrowBackIcon />}
										variant="text"
										color="success"
										sx={{
											textTransform: "none",
										}}
									>
										<Typography variant="body1">
											Back to search results{" "}
										</Typography>
									</Button>
								</Box>
								<Box
									sx={{
										display: "flex",
										width: "100%",
										alignItems: "flex-start",
									}}
								>
									<Carousel
										animation="slide"
										IndicatorIcon={false}
										navButtonsAlwaysVisible={true}
										fullHeightHover={true}
										navButtonsProps={{
											// Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
											style: {
												backgroundColor: "Transparent",
												borderRadius: 0,
											},
										}}
										NextIcon={<ArrowForwardIosOutlined />}
										PrevIcon={<ArrowBackIosNewOutlined />}
										autoPlay={false}
										height={420}
										sx={{ width: "100%", borderRadius: "0.5rem" }}
									>
										{data.data.images.map((item, index) => {
											return (
												<CardMedia
													key={index}
													component="img"
													height="100%"
													width="100%"
													loading="lazy"
													image={item.url}
													alt="property image"
													sx={{ objectFit: "cover" }}
												/>
											);
										})}
									</Carousel>
								</Box>
								<Box
									sx={{
										display: "flex",
										width: "100%",
									}}
								>
									<Grid container xs flexDirection="row">
										<Grid item xs>
											<Typography variant="h6">
												{data.data.address.displayAddress}
											</Typography>
										</Grid>

										<Grid item xs={1}>
											<IconButton color="warning">
												<FavoriteBorderIcon />
											</IconButton>
										</Grid>
									</Grid>
								</Box>
								<Box>
									<Typography variant="h5">
										{data.data.prices.primaryPrice}
									</Typography>
								</Box>

								<Box
									sx={{
										display: "flex",
										width: "100%",
									}}
								>
									<Grid container xs flexDirection="row">
										<Grid item xs>
											<Button
												startIcon={<CalculateIcon />}
												variant="text"
												disableRipple
												sx={{ textTransform: "none" }}
												color="success"
											>
												<Typography variant="body1">
													Monthly mortgage payments
												</Typography>
											</Button>
										</Grid>

										<Grid item xs={2}>
											<Typography variant="body2">
												{data.data.listingHistory.listingUpdateReason}
											</Typography>
										</Grid>
									</Grid>
								</Box>

								<Box
									sx={{
										display: "flex",
										width: "100%",
									}}
								>
									<Grid container xs flexDirection="row">
										<Grid container flexDirection="column" item xs={3}>
											<Grid item>
												<Typography variant="body1" fontWeight={100}>
													{data.data.infoReelItems[0].title}
												</Typography>
											</Grid>
											<Grid item flexDirection="row" display="flex">
												<HomeOutlinedIcon />
												<Typography variant="body1">
													{data.data.infoReelItems[0].primaryText}
												</Typography>
											</Grid>
										</Grid>

										<Grid container flexDirection="column" item xs={3}>
											<Grid item>
												<Typography variant="body1" fontWeight={100}>
													{data.data.infoReelItems[1].title}
												</Typography>
											</Grid>
											<Grid item flexDirection="row" display="flex">
												<BedOutlinedIcon />
												<Typography variant="body1">
													{data.data.infoReelItems[1].primaryText}
												</Typography>
											</Grid>
										</Grid>
										<Grid container flexDirection="column" item xs={3}>
											<Grid item>
												<Typography variant="body1" fontWeight={100}>
													{data.data.infoReelItems[2].title}
												</Typography>
											</Grid>
											<Grid item flexDirection="row" display="flex">
												<BathroomOutlinedIcon />
												<Typography variant="body1">
													{data.data.infoReelItems[2].primaryText}
												</Typography>
											</Grid>
										</Grid>
										<Grid container item xs={3}></Grid>
									</Grid>
								</Box>
							</Box>
						</>
					)}
				</Grid>
				<Grid container xs={2}>
					<Grid item>
						<Typography>side bar</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default PropertyDetail;
