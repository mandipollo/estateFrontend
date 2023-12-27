import React, { useEffect } from "react";

import { ref, remove, onValue } from "firebase/database";
import { database, auth } from "../../firebase.config";

import { useSelector, useDispatch } from "react-redux";
import CardSavedProperty from "../card/CardSavedProperty";
import EmptySavedProperties from "./EmptySavedProperties";
import { Box, Paper, Typography } from "@mui/material";
import { setSavedUserProperty } from "../../store/savedPropSlice";
const SavedProperties = () => {
	const dispatch = useDispatch();
	const userPropSaved = useSelector(state => state.savedUserProperty);
	const arrayOfPropSaved = userPropSaved ? Object.values(userPropSaved) : null;
	const uid = auth.currentUser ? auth.currentUser.uid : null;

	// setup listener for firebase database
	useEffect(() => {
		const savedPropertiesRef = ref(database, `users/${uid}/savedProperties`);

		const handleChange = snapshot => {
			const data = snapshot.val();

			dispatch(setSavedUserProperty(data));
		};

		const errorHandler = error => {
			console.error("Error fetching saved properties:", error);
		};
		//listener

		const unsubscribe = onValue(savedPropertiesRef, handleChange, errorHandler);

		// cleanup listener on component unmount

		return () => unsubscribe();
	}, [uid]);

	const deletePropHandler = propertyId => {
		remove(ref(database, `users/${uid}/savedProperties/${propertyId}`));
	};
	return (
		<Paper
			elevation={8}
			sx={{
				display: "flex",
				justifyContent: "Center",
				flexDirection: "column",
				alignItems: "Center",
			}}
		>
			{arrayOfPropSaved && (
				<Box
					sx={{
						width: "100%",
						height: "5em",
						display: "flex",
						alignItems: "center",
						marginLeft: "8em",
					}}
				>
					<Typography fontFamily="ubuntu" variant="h6">
						{arrayOfPropSaved.length} saved properties
					</Typography>
				</Box>
			)}
			{!userPropSaved && <EmptySavedProperties />}
			{userPropSaved &&
				arrayOfPropSaved.map((prop, index) => (
					<CardSavedProperty
						sale={prop.sale}
						key={index}
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
						deletePropHandler={deletePropHandler}
					/>
				))}
		</Paper>
	);
};

export default SavedProperties;
