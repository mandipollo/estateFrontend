import {
	CardActionArea,
	Box,
	Card,
	CardContent,
	CardMedia,
	Typography,
	CardActions,
	Button,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const CardProduct = ({
	images,
	displayAddress,
	propertySubType,
	bedrooms,
	bathrooms,
	summary,
	displayPrice,
	customerImage,
	contactNo,
}) => {
	return (
		<Card sx={{ width: "90%", flexDirection: "row", display: "flex" }}>
			<Box sx={{ flex: 6 }}>
				<Box height={220}>
					<Carousel
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
						NextIcon={<ArrowForwardIosOutlinedIcon />}
						PrevIcon={<ArrowBackIosNewOutlinedIcon />}
						autoPlay={false}
						height={220}
					>
						{images.map((item, index) => {
							return (
								<CardMedia
									key={index}
									component="img"
									height={220}
									image={item.srcUrl}
									alt="property image"
									sx={{ objectFit: "cover" }}
								/>
							);
						})}
					</Carousel>
				</Box>

				<Box
					sx={{
						backgroundColor: "#34A29F",
					}}
				>
					<Typography variant="h5" color="white" paddingLeft={2}>
						{displayPrice}
					</Typography>
				</Box>
			</Box>
			<Box sx={{ display: "flex", flex: 6, flexDirection: "column", gap: 1 }}>
				<CardActionArea disableRipple sx={{ flex: 9 }}>
					<CardContent
						sx={{
							display: "flex",
							flexDirection: "column",
							flex: 6,
						}}
					>
						<Typography variant="body1">{displayAddress}</Typography>
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
					</CardContent>
				</CardActionArea>
				<Box
					sx={{
						display: "flex",
						gap: 1,
						flexDirection: "row",
						paddingLeft: 2,
						alignItems: "center",
						flex: 3,
					}}
				>
					<Box>
						<CardMedia
							sx={{ maxHeight: 30 }}
							component="img"
							image={customerImage}
						/>
					</Box>
					<Box>
						<Typography variant="body2" color="text.secondary">
							{contactNo}
						</Typography>
					</Box>

					<CardActions
						sx={{ display: "flex", flex: 1, justifyContent: "flex-end" }}
					>
						<Button
							startIcon={<FavoriteBorderOutlinedIcon />}
							size="small"
							variant="text"
							disableRipple
						>
							Save
						</Button>
					</CardActions>
				</Box>
			</Box>
		</Card>
	);
};

export default CardProduct;
