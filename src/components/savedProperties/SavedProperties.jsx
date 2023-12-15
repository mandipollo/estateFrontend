import React, { useEffect, useState } from "react";

import { ref, onValue, remove } from "firebase/database";
import { database } from "../../firebase.config";
import { auth } from "../../firebase.config";

import CardSavedProperty from "../card/CardSavedProperty";
import EmptySavedProperties from "./EmptySavedProperties";
import { Box, Paper, Typography } from "@mui/material";

const SavedProperties = () => {
	const [savedProperties, setSavedProperties] = useState(null);
	const arraySavedProperties = savedProperties
		? Object.values(savedProperties)
		: null;

	console.log(arraySavedProperties);

	const uid = auth.currentUser ? auth.currentUser.uid : null;
	console.log(savedProperties);
	useEffect(() => {
		const savedPropertiesRef = ref(database, `users/${uid}/savedProperties`);

		const handleChange = snapshot => {
			const data = snapshot.val();
			setSavedProperties(data);
		};

		console.log("saved prop");
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
		console.log(`deleted prop${propertyId}`);
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
			{arraySavedProperties && (
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
						{arraySavedProperties.length} saved properties
					</Typography>
				</Box>
			)}
			{!savedProperties && <EmptySavedProperties />}
			{savedProperties &&
				arraySavedProperties.map((prop, index) => (
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
