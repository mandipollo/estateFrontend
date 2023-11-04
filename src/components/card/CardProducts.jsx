import { useState } from "react";

import {
	CardActionArea,
	Box,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";

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
	customer,
	contactNo,
}) => {
	const [imageIndex, setImageIndex] = useState(0);
	let imageLength = image.length;

	const changeHandler = () => {};
	return (
		<Card sx={{ width: "90%", flexDirection: "row", display: "flex" }}>
			<Box sx={{ flex: 6 }}>
				<Box height={200}>
					<Carousel
						autoPlay={false}
						next={() => {
							setImageIndex((imageIndex + 1) % imageLength);
						}}
						prev={() => {
							setImageIndex((imageIndex - 1) % imageLength);
						}}
						height={200}
					>
						<CardMedia
							component="img"
							height={200}
							image={image[imageIndex].srcUrl}
							alt="property image"
						/>
					</Carousel>
				</Box>

				<Box
					sx={{
						backgroundColor: "#34A29F",
					}}
				>
					<Typography variant="h5" color="white">
						{displayPrice}
					</Typography>
				</Box>
			</Box>
			<CardActionArea disableRipple sx={{ display: "flex", flex: 6 }}>
				<Box>
					<CardContent
						sx={{
							display: "flex",
							flexDirection: "column",
							flex: 6,
						}}
					>
						<Typography variant="h6">{displayAddress}</Typography>
						<Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
							<Typography variant="body2" color="text.secondary">
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

						<Typography gutterBottom variant="body2" color="text.secondary">
							{summary}
						</Typography>
						<Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
							<Typography variant="body2" color="green">
								{customer}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{contactNo}
							</Typography>
						</Box>
					</CardContent>
				</Box>
			</CardActionArea>
		</Card>
	);
};

export default CardProduct;
