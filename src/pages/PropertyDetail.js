import React, { useEffect, useState } from "react";
import theme from "../theme";

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

const PropertyDetail = () => {
	const ismd = useMediaQuery(theme.breakpoints.down("md"));
	const navigateBack = useNavigateBack();
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
	}, [propertyId]);

	return (
		<StyledBox display="flex" flexDirection={"column"} width="100%" gap={2}>
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
								gap={2}
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
									<CardPropertyDescription data={data} />
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
											src={
												!ismd
													? data.data.staticMapImgUrls
															.staticMapImgUrlDesktopLarge
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
				{!ismd && (
					<Grid container item xs={2}>
						<Grid item>
							<Typography>side bar</Typography>
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
	);
};

export default PropertyDetail;
