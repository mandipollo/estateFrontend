import { Box } from "@mui/material";

// components
import CardHomeSection from "../components/sections/home/CardHomeSection";
import CardHomeLink from "../components/sections/home/CardHomeLink";
import Search from "../components/search/Search";

const Homepage = () => {
	return (
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
						<Search
							propXs="none"
							propSm="none"
							title="	Find your forever home"
							description="Search properties for sale and to rent in the UK"
						/>
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
	);
};

export default Homepage;
