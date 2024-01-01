import React from "react";
import axios from "axios";

const GeoCoding = async address => {
	const response = await axios.get(
		`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDpkpUMhx12G1pRf2e51dKOJ3CISKqLb9s`
	);
	const { lat, lng } = response.data.results[0].geometry.location;
	return { lat, lng };
};

export default GeoCoding;
