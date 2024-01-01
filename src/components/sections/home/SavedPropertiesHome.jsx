import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, Button } from "@mui/material";
import theme from "../../../theme";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import CardSavedPropertyHome from "./CardSavedPropertyHome";
import { useSelector, useDispatch } from "react-redux";

import { ref, onValue } from "firebase/database";
import { database } from "../../../firebase.config";
import { setSavedUserProperty } from "../../../store/savedPropSlice";

const SavedPropertiesHome = ({ user }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	const dispatch = useDispatch();
	const userPropSaved = useSelector(state => state.savedUserProperty);
	const arrayOfPropSaved = userPropSaved ? Object.values(userPropSaved) : null;

	const uid = user.userDetail.uid;
	// setup listener for saved prop database
	useEffect(() => {
		if (uid) {
			const savedPropertiesRef = ref(database, `users/${uid}/savedProperties`);

			const handleChange = snapshot => {
				const data = snapshot.val();
				dispatch(setSavedUserProperty(data));
				setIsLoading(false);
			};

			const errorHandler = error => {
				console.error("Error fetching saved properties:", error);
				setError(error);
				setIsLoading(false);
			};
			//listener

			const unsubscribe = onValue(
				savedPropertiesRef,
				handleChange,
				errorHandler
			);
			// cleanup listener on component unmount

			return () => unsubscribe();
		}
	}, [uid]);

	return (
		<>
			{!isLoading && (
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						margin: "2em",
					}}
				>
					<Box
						display="flex"
						sx={{
							display: "flex",
							padding: "1em",
							height: "100%",
							maxWidth: 1200,
							width: "100%",
							justifyContent: "center",
							flexDirection: "column",
							gap: 4,
							borderRadius: "1em",
						}}
					>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								borderBottom: "0.1px solid rgba(71, 78, 104, 0.5)",
								paddingBottom: "1em",
							}}
						>
							<Typography variant="h5" fontFamily="ubuntu">
								Saved properties
							</Typography>

							<Link to="/myEstate">
								<Button
									color="secondary"
									startIcon={<SettingsOutlinedIcon />}
									variant="contained"
								>
									<Typography variant="body2">Manage property</Typography>
								</Button>
							</Link>
						</Box>
						{error ? (
							<p>{error}</p>
						) : (
							<Box sx={{ overflowX: "auto" }}>
								<Grid container flexWrap="nowrap" gap={1} paddingBottom="1em">
									{arrayOfPropSaved &&
										arrayOfPropSaved.map(prop => (
											<CardSavedPropertyHome
												sale={prop.sale}
												key={prop.propertyId}
												images={prop.image}
												displayAddress={prop.address}
												propertySubType={prop.propertyType}
												bedrooms={prop.bedrooms}
												bathrooms={prop.bathrooms}
												summary={prop.summary}
												displayPrice={prop.price}
												customerImage={prop.customerImage}
												contactNo={prop.contactNo}
												propertyId={prop.propertyId}
											/>
										))}
								</Grid>
							</Box>
						)}
					</Box>
				</Box>
			)}
		</>
	);
};

export default SavedPropertiesHome;
