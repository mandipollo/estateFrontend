import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { auth, database } from "../../firebase.config";
import { useDispatch } from "react-redux";

import { setSavedUserProperty } from "../../store/savedPropSlice";
const useSaveProp = () => {
	const dispatch = useDispatch();

	const uid = auth.currentUser ? auth.currentUser.uid : null;

	useEffect(() => {
		if (!uid) return;
		const savedPropertiesRef = ref(database, `users/${uid}/savedProperties`);

		const handleChange = snapshot => {
			const data = snapshot.val();
			console.log(data);
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
};

export default useSaveProp;
