import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase.config";

const ProtectRoute = ({ children }) => {
	const isAuth = auth.currentUser;

	if (!isAuth) {
		return <Navigate to="/" replace />;
	}
	return children;
};

export default ProtectRoute;
