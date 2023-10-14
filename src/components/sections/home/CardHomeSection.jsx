import React from "react";
import CardHome from "../../card/CardHome";
import { Box } from "@mui/material";

const CardHomeSection = () => {
	return (
		<Box
			sx={{
				display: {
					sm: "none",
					md: "flex",
				},
				justifyContent: "center",
				flex: 1,
				height: 400,
				marginTop: 10,
			}}
		>
			<CardHome
				image={`https://media.rightmove.co.uk/sold-prices-pod-image.jpeg`}
				title="Sold house price"
				description="Check what a home sold for plus photos, floorplans and local insights."
				buttonText="Search house prices"
			></CardHome>
			<CardHome
				image={`https://www.rightmove.co.uk/news/content/uploads/2023/10/HeaderAdobeStock13DoorResized-740x400.jpg`}
				title="House numbered unlucky 13 have £5000 lower valuation"
				description="No. 13 is the lowest valued door number out of properties numbered 1 to 100."
				buttonText="Visit the Estate blog"
			></CardHome>
			<CardHome
				image={`https://www.rightmove.co.uk/moving-stories/content/uploads/2022/12/ResizedAPOAndrewMarcoHero2-e1696256333802.jpg`}
				title="We discovered a Built for Renters home and made it our own"
				description="Andrew and Thomas loves their pet-friendly flat by the River Thames"
				buttonText="Find out more"
			></CardHome>
		</Box>
	);
};

export default CardHomeSection;
