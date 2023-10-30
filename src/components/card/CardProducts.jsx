import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/material";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";

const CardProduct = ({
	image,
	displayAddress,
	propertySubType,
	bedrooms,
	bathrooms,
	summary,
	displayPrice,
}) => {
	return (
		<Card sx={{ width: "90%" }}>
			<CardActionArea
				disableRipple
				sx={{ display: "flex", flexDirection: "row" }}
			>
				<CardMedia
					component="img"
					height="200"
					image={image}
					alt="property image"
				/>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Typography variant="h6">{displayAddress}</Typography>
					<Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
						<Typography variant="body2">{propertySubType}</Typography>
						<BedOutlinedIcon fontSize="small" />
						<Typography variant="body2">{bedrooms}</Typography>
						<BathroomOutlinedIcon fontSize="small" />
						<Typography variant="body2">{bathrooms}</Typography>
					</Box>

					<Typography variant="body2" color="text.secondary">
						{summary}
					</Typography>
					<Typography color="green">{displayPrice}</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default CardProduct;
