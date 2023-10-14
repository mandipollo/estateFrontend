import React from "react";
import { Box } from "@mui/material";
import Search from "../components/search/Search";
import CardHome from "../components/card/CardHome";

const Homepage = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}
		>
			<Box
				sx={{
					width: "100vw",
					height: "250px",
					backgroundImage: `url("https://media.rightmove.co.uk/hero_image.jpeg")`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			></Box>
			<Box sx={{ display: "flex", justifyContent: "center", mt: -15 }}>
				<Search />
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					flex: 1,
					height: 400,
					marginTop: 10,
					gap: 3,
				}}
			>
				<CardHome
					image={`https://media.rightmove.co.uk/sold-prices-pod-image.jpeg`}
					title="Sold house price"
					description="Check what a home sold for plus photos, floorplans and local insights."
				></CardHome>
				<CardHome
					image={`https://www.rightmove.co.uk/news/content/uploads/2023/10/HeaderAdobeStock13DoorResized-740x400.jpg`}
					title="House numbered unlucky 13 have £5000 lower valuation"
					description="No. 13 is the lowest valued door number out of properties numbered 1 to 100."
				></CardHome>
				<CardHome
					image={`https://www.rightmove.co.uk/moving-stories/content/uploads/2022/12/ResizedAPOAndrewMarcoHero2-e1696256333802.jpg`}
					title="We discovered a Built for Renters home and made it our own"
					description="Andrew and Thomas loves their pet-friendly flat by the River Thames"
				></CardHome>
			</Box>
		</Box>
	);
};

export default Homepage;
