import React from "react";
import { useNavigate } from "react-router-dom";

const useNavigateBack = () => {
	const navigate = useNavigate();
	const navigateBack = () => {
		navigate(-1);
	};

	return navigateBack;
};

export default useNavigateBack;
