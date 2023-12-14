import React from "react";

const savePropHandler = ({}) => {
	const uid = auth.currentUser ? auth.currentUser.uid : null;

	const propertyData = {
		address: displayAddress,
		price: displayPrice,
		image: images[0].srcUrl,
		propertyType: propertySubType,
		bedrooms: bedrooms,
		bathrooms: bathrooms,
		summary: summary,
		customerImage: customerImage,
		contactNo: contactNo,
		propertyId: propertyId,
	};

	if (uid) {
		update(
			ref(database, `users/${uid}/savedProperties/${propertyId}`),
			propertyData
		);
	}
};

export default savePropHandler;
