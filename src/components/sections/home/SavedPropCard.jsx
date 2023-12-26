import axios from "axios";
import React from "react";
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

const SavedPropertiesCard = ({
	images,
	displayAddress,
	propertySubType,
	bedrooms,
	bathrooms,
	displayPrice,
	propertyId,
}) => {
	return (
		<Grid item key={propertyId} xs={5} sm={5} md={3} lg={2}>
			<Card>
				<Link
					style={{ textDecoration: "none", color: "black" }}
					to={`/propertyDetail/${propertyId}`}
					target="_blank"
				>
					<CardActionArea>
						<CardMedia
							component="img"
							height={100}
							image={images}
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
								{displayPrice}
							</Typography>
							<Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
								<Typography noWrap variant="body2" color="text.secondary">
									{propertySubType}
								</Typography>
								<BedOutlinedIcon fontSize="small" />
								<Typography variant="body2" color="text.secondary">
									{bedrooms}
								</Typography>
								<BathroomOutlinedIcon fontSize="small" />
								<Typography variant="body2" color="text.secondary">
									{bathrooms}
								</Typography>
							</Box>
						</CardContent>
						<CardContent>
							<Typography noWrap variant="body2" color="text.secondary">
								{displayAddress}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Link>
			</Card>
		</Grid>
	);
};

export default SavedPropertiesCard;
