import React from "react";
import { Box } from "@mui/material";
import Search from "../components/search/Search";
import CardHome from "../components/card/CardHome";
import CardLink from "../components/card/CardLink";

import SearchIcon from "@mui/icons-material/Search";

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
				<CardLink
					icon={"https://www.svgrepo.com/show/355487/search.svg"}
					title="Free home valuation"
					description="Find out how much your home's worth from an expert"
					link="Get a free agent valuation"
				></CardLink>
				<CardLink
					icon={"https://www.svgrepo.com/show/153974/office-block.svg"}
					title="Commercial property"
					description="Search freehold and leasehold properties in the UK"
					link="Search now"
				></CardLink>
				<CardLink
					icon={"https://www.svgrepo.com/show/503795/energy-saving.svg"}
					title="Enery efficieny"
					description="Check a home's energy efficieny and how to improve it"
					link="Learn now"
				></CardLink>
			</Box>
		</Box>
	);
};

export default Homepage;
