import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

// components
import Footer from "../components/sections/footer/Footer";

const Root = () => {
	return (
		<Box>
			<header>
				<Navbar />
			</header>
			<main>
				<Box display="flex" flex="1" minHeight="60vh" justifyContent="center">
					<Outlet />
				</Box>
			</main>

			<footer>
				<Footer />
			</footer>
		</Box>
	);
};

export default Root;
