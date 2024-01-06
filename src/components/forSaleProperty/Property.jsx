import {
	CardActionArea,
	Box,
	Card,
	CardContent,
	CardMedia,
	Typography,
	CardActions,
	Button,
	useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import theme from "../../theme";

import { database, auth } from "../../firebase.config";
import { update, ref } from "firebase/database";
import { useState } from "react";

const Property = ({
	images,
	displayAddress,
	propertySubType,
	bedrooms,
	bathrooms,
	summary,
	displayPrice,
	customerImage,
	contactNo,
	propertyId,
	handleOpen,
}) => {
	const [saved, setSaved] = useState(false);
	const savePropertyHandler = () => {
		const uid = auth.currentUser ? auth.currentUser.uid : null;

		const propertyData = {
			address: displayAddress,
			price: displayPrice,
			image: images[0].srcUrl,
			propertyType: propertySubType,
			bedrooms: bedrooms,
			bathrooms: bathrooms,
			summary: summary,
			customerImage: customerImage,
			contactNo: contactNo,
			propertyId: propertyId,
			sale: true,
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
	const isSm = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Card
			key={propertyId}
			sx={{
				height: 250,
				width: "90%",
				flexDirection: {
					xs: "column",
					sm: "row",
					md: "row",
				},
				display: "flex",
			}}
		>
			<Box key={propertyId} sx={{ flex: 6 }}>
				<Box height={220}>
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
						NextIcon={<ArrowForwardIosOutlinedIcon />}
						PrevIcon={<ArrowBackIosNewOutlinedIcon />}
						autoPlay={false}
						height={220}
					>
						{images.map((item, index) => {
							return (
								<CardMedia
									loading="lazy"
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
						display: "flex",
						flexDirection: "row",
						backgroundColor: "#34A29F",
					}}
				>
					<Typography variant="h5" color="white" paddingLeft={2}>
						{displayPrice}
					</Typography>
					<Link
						style={{
							textDecoration: "none",
							color: "black",
							display: isSm ? "block" : "none",
						}}
						to={`/propertyDetail/${propertyId}`}
					>
						<Button>
							<Typography variant="body2" color="white" paddingLeft={2}>
								View the property
							</Typography>
						</Button>
					</Link>
				</Box>
			</Box>
			<Box sx={{ display: "flex", flex: 6, flexDirection: "column", gap: 1 }}>
				<Link
					style={{ textDecoration: "none", color: "black" }}
					to={`/propertyDetail/${propertyId}`}
				>
					<CardActionArea disableRipple sx={{ display: "flex", flex: 9 }}>
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
							<Box
								sx={{
									overflow: "hidden",
									textOverflow: "ellipsis",
									height: 100,
								}}
							>
								<Typography
									display={isSm ? "none" : "block"}
									gutterBottom
									variant="body2"
									color="text.secondary"
									sx={{
										overflow: "hidden",
										textOverflow: "ellipsis",
									}}
								>
									{summary}
								</Typography>
							</Box>
						</CardContent>
					</CardActionArea>
				</Link>
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
							onClick={savePropertyHandler}
							startIcon={
								saved ? (
									<FavoriteIcon style={{ color: "red" }} />
								) : (
									<FavoriteBorderOutlinedIcon />
								)
							}
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

export default Property;
