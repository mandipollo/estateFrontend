import React, { useEffect, useState } from "react";

import axios from "axios";
import { Box, Typography, Button, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
// redux
import { useParams } from "react-router-dom";
// components

import StyledBox from "../components/styledComponents/StyledBox";
import CarousalImage from "../components/carousal/CarousalImage";
import CardPropertyDescription from "../components/card/CardPropertyDescription";

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
		<StyledBox flexdirection="column" width="100%" alignItems="center" gap={2}>
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
								<Box width="100%" alignItems="flex-start" padding="1em 0">
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
											Back to search results
										</Typography>
									</Button>
								</Box>
								<StyledBox width="100%" alignItems="flex-start">
									<CarousalImage data={data} />
								</StyledBox>
								<CardPropertyDescription data={data} />

								<StyledBox width="100%">
									<Grid container flexDirection="row">
										{data.data.infoReelItems.map((item, index) => (
											<Grid container flexDirection="column" item xs={3}>
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
		</StyledBox>
	);
};

export default PropertyDetail;
