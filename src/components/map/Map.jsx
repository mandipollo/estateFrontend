import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
	width: "300px",
	height: "300px",
};

const TownMap = ({ center }) => {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: "AIzaSyDpkpUMhx12G1pRf2e51dKOJ3CISKqLb9s",
		libraries,
	});

	if (loadError) {
		return <div>Error loading maps</div>;
	}

	if (!isLoaded) {
		return <div>Loading maps</div>;
	}

	return (
		<div>
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				zoom={12}
				center={center}
			>
				<Marker position={center} />
			</GoogleMap>
		</div>
	);
};

export default TownMap;
