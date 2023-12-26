import { useEffect, useState } from "react";

import { Box, Grid, Button, Typography, useMediaQuery } from "@mui/material";

import { database, auth } from "../firebase.config";
import { onValue, ref } from "firebase/database";
import { Link } from "react-router-dom";
// components

import Search from "../components/search/Search";
import CardUser from "../components/sections/home/CardUser";
import Guide from "../components/sections/home/Guide";
import homeWallpaper from "../assets/image/homeWallpaper.jpeg";
import theme from "../theme";
import SavedPropertiesHome from "../components/sections/home/SavedPropertiesHome";
import { useSelector } from "react-redux";

const Homepage = () => {
	const isTablet = useMediaQuery(theme.breakpoints.down("tablet"));

	const user = useSelector(state => state.user);

	// // user saved properties
	// const [savedProperties, setSavedProperties] = useState(null);
	// const arraySavedProperties = savedProperties
	// 	? Object.values(savedProperties)
	// 	: null;

	// const uid = auth.currentUser ? auth.currentUser.uid : null;
	// console.log(savedProperties);
	// useEffect(() => {
	// 	const savedPropertiesRef = ref(database, `users/${uid}/savedProperties`);

	// 	const handleChange = snapshot => {
	// 		const data = snapshot.val();
	// 		setSavedProperties(data);
	// 	};

	// 	const errorHandler = error => {
	// 		console.error("Error fetching saved properties:", error);
	// 	};
	// 	//listener

	// 	const unsubscribe = onValue(savedPropertiesRef, handleChange, errorHandler);

	// 	// cleanup listener on component unmount

	// 	return () => unsubscribe();
	// }, [uid]);

	return (
		<main>
			<Box
				sx={{
					width: "100vw",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					backgroundColor: isTablet ? "#EAEAED" : "white",
				}}
			>
				<Box
					sx={{
						display: {
							xs: "none",
							md: "flex",
						},
						width: "100%",
						height: "15rem",
						backgroundImage: `url(${homeWallpaper})`,
						backgroundPosition: "center 15%",
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
				<section> {!user.status && <CardUser />}</section>

				<section>{user.status && <SavedPropertiesHome user={user} />}</section>
				<section>
					<Guide />
				</section>
			</Box>
		</main>
	);
};

export default Homepage;
