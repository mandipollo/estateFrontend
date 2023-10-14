import React from "react";
import { Box } from "@mui/material";
import Search from "../components/search/Search";

import CardHomeSection from "../components/sections/home/CardHomeSection";
import CardHomeLink from "../components/sections/home/CardHomeLink";

const Homepage = () => {
	return (
		<Box>
			<main>
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
					<section>
						<Box sx={{ display: "flex", justifyContent: "center", mt: -15 }}>
							<Search />
						</Box>
					</section>
					<section>
						<CardHomeSection />
					</section>
					<section>
						<CardHomeLink />
					</section>
				</Box>
			</main>
		</Box>
	);
};

export default Homepage;
