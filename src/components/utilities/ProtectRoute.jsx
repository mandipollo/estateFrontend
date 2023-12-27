import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase.config";

const ProtectRoute = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [isAuth, setIsAuth] = useState(null);

	useEffect(() => {
		const checkAuthStatus = () => {
			try {
				auth.onAuthStateChanged(user => {
					setIsAuth(!!user);
					setIsLoading(false);
				});
			} catch (error) {
				console.error("Error checking authentication status:", error);
				setIsLoading(false);
			}
		};

		checkAuthStatus();
	}, []);

	if (isLoading) {
		return <p>Loading...</p>;
	}
	if (!isAuth) {
		return <Navigate to="/" replace />;
	}
	return children;
};

export default ProtectRoute;
