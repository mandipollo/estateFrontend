import React from "react";

import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

// components
import Footer from "../components/sections/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Root = () => {
	return (
		<Box>
			<header>
				<Navbar />
			</header>
			<main>
				<Box display="flex" flex="1" minHeight="60vh" justifyContent="center">
					<Box maxWidth="90em">
						<Outlet />
					</Box>
				</Box>
			</main>

			<footer>
				<Footer />
			</footer>
		</Box>
	);
};

export default Root;
