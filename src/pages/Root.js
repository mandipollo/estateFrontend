import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Root = () => {
	return (
		<Box>
			<Navbar />
			<Box flex="1" justifyContent="center">
				<Outlet />
			</Box>
		</Box>
	);
};

export default Root;
