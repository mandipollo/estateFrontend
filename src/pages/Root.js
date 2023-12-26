import React from "react";

import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

// components
import Footer from "../components/sections/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Root = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
			<header>
				<Navbar />
			</header>
			<main style={{ display: "flex", justifyContent: "center", flex: "1" }}>
				<Box component="div">
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
