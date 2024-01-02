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

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";

import theme from "../../theme";

const CardSavedProperty = ({
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
	deletePropHandler,
	sale,
}) => {
	const isSm = useMediaQuery(theme.breakpoints.down("sm"));
	const navigate = sale ? "propertyDetail" : "propertyDetailRent";
	return (
		<Card
			sx={{
				flexDirection: {
					xs: "column",
					sm: "row",
					md: "row",
				},
				width: "90%",
				margin: "1em 0",
				display: "flex",
			}}
		>
			<Box sx={{ flex: 6 }}>
				<Box height={220}>
					<CardMedia
						loading="lazy"
						component="img"
						height={220}
						image={images}
						alt="property image"
						sx={{ objectFit: "cover" }}
					/>
				</Box>

				<Box
					sx={{
						backgroundColor: "#F2F1EB",
						height: 50,
						alignItems: "center",
						display: "flex",
					}}
				>
					<Typography
						variant="h5"
						fontFamily="ubuntu"
						fontWeight={100}
						paddingLeft={2}
					>
						{displayPrice}
					</Typography>
				</Box>
			</Box>
			<Box sx={{ display: "flex", flex: 6, flexDirection: "column", gap: 1 }}>
				<Link
					style={{ textDecoration: "none", color: "black" }}
					to={`/${navigate}/${propertyId}`}
				>
					<CardActionArea
						disableRipple
						sx={{
							flex: 9,
							height: "201px",
							overflow: "hidden",
							textOverflow: "ellipsis",
							height: 201,
						}}
					>
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
							onClick={() => deletePropHandler(propertyId)}
							sx={{
								"&:hover": {
									textDecoration: "underline",

									textUnderlineOffset: "3px",
								},
							}}
							startIcon={<DeleteOutlineOutlinedIcon />}
							size="medium"
							variant="text"
							disableRipple
						>
							Remove
						</Button>
					</CardActions>
				</Box>
			</Box>
		</Card>
	);
};

export default CardSavedProperty;
