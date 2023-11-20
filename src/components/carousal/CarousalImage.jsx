import React from "react";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosNewOutlined from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlined from "@mui/icons-material/ArrowForwardIosOutlined";
import { CardMedia } from "@mui/material";

const CarousalImage = ({ data }) => {
	return (
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
	);
};

export default CarousalImage;
