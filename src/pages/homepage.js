import { Box, Grid, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// components
import CardHomeSection from "../components/sections/home/CardHomeSection";
import CardHomeLink from "../components/sections/home/CardHomeLink";
import Search from "../components/search/Search";
import CardUser from "../components/card/CardUser";

const Homepage = () => {
	return (
		<main>
			<Box
				sx={{
					width: "100vw",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}
			>
				<Box
					sx={{
						display: {
							xs: "none",
							md: "flex",
						},
						width: "100%",
						height: "20rem",
						backgroundImage: `url("https://www.pixel4k.com/wp-content/uploads/2023/08/night-city-long-exposure-road-horizon-4k_1691849809.jpg.webp")`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
					}}
				></Box>
				<section>
					<Box
						sx={{
							display: {
								xs: "flex",
								md: "none",
							},
							width: "100%",
							backgroundColor: "#262737",
							justifyContent: "center",
							padding: "1em 0",
						}}
					>
						<Grid
							container
							flexDirection="column"
							justifyContent="center"
							alignItems="center"
							gap={1}
						>
							<Grid item>
								<Typography variant="h6" color="#01DEB6">
									Believe in finding it
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant="body2" color="white">
									Search properties for sale and to rent in the UK.
								</Typography>
							</Grid>
							<Grid item container spacing={2}>
								<Grid item xs ml={1}>
									<Link
										to="/forSale"
										style={{ textTransform: "none", color: "black" }}
									>
										<Button
											size="large"
											fullWidth
											sx={{ backgroundColor: "#01DEB6" }}
										>
											For sale
										</Button>
									</Link>
								</Grid>
								<Grid item xs mr={1}>
									<Link
										to="/toRent"
										style={{ textTransform: "none", color: "black" }}
									>
										<Button
											size="large"
											fullWidth
											sx={{ backgroundColor: "#01DEB6" }}
										>
											To rent
										</Button>
									</Link>
								</Grid>
							</Grid>
						</Grid>
					</Box>
					<Box
						sx={{
							display: {
								xs: "none",
								md: "flex",
							},
							justifyContent: "center",
							mt: -15,
						}}
					>
						<Search
							propXs="none"
							propSm="flex"
							title="	Find your forever home"
							description="Search properties for sale and to rent in the UK"
						/>
					</Box>
				</section>
				<section>
					<CardUser />
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
