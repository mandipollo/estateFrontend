import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	Typography,
	Box,
	CardActionArea,
} from "@mui/material";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
const CardSimiliarProp = ({ propertyId }) => {
	const [propertyData, setPropertyData] = useState("");
	console.log(propertyData);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				"http://localhost:5003/forSaleSimiliarProperty",
				{
					params: {
						id: propertyId,
					},
				}
			);
			const propertyData = response.data;
			setPropertyData(propertyData);
		};

		fetchData();
	}, [propertyId]);
	return (
		<>
			{propertyData && (
				<Grid container gap={2}>
					{propertyData.data.map((item, index) => (
						<Grid item key={index} xs={2}>
							<Card>
								<Link
									style={{ textDecoration: "none", color: "black" }}
									to={`/propertyDetail/${item.id}`}
								>
									<CardActionArea>
										<CardMedia
											component="img"
											height={150}
											image={item.images[0].url}
											alt="property image"
											sx={{ objectFit: "cover" }}
										></CardMedia>

										<CardContent
											sx={{
												display: "flex",
												flexDirection: "column",
											}}
										>
											<Typography variant="body1" color="green">
												{item.displayPrice}
											</Typography>
											<Box
												sx={{ display: "flex", flexDirection: "row", gap: 1 }}
											>
												<Typography variant="body2" color="text.secondary">
													{item.propertySubType}
												</Typography>
												<BedOutlinedIcon fontSize="small" />
												<Typography variant="body2" color="text.secondary">
													{item.bedrooms}
												</Typography>
												<BathroomOutlinedIcon fontSize="small" />
												<Typography variant="body2" color="text.secondary">
													{item.bathrooms}
												</Typography>
											</Box>
										</CardContent>
										<CardContent>
											<Typography noWrap variant="body2" color="text.secondary">
												{item.displayAddress}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Link>
							</Card>
						</Grid>
					))}
				</Grid>
			)}
		</>
	);
};

export default CardSimiliarProp;
