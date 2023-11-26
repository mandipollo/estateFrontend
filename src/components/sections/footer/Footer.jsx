import React from "react";

import { Box, ListItem, List } from "@mui/material";
// components
import FooterList, { listData } from "./FooterList";

const Footer = () => {
	return (
		<Box
			sx={{
				backgroundColor: "#1C3A32",
				width: "100vw",
				padding: "30px 0",
				display: "flex",
				justifyContent: "center",
			}}
		>
			<List
				sx={{
					color: "white",
					fontSize: 14,
					flex: 1,
					maxWidth: 1400,
				}}
			>
				<ListItem
					sx={{
						display: "flex",
						alignItems: "flex-start",
						justifyContent: "space-evenly",
					}}
				>
					{listData.map((items, index) => {
						return <FooterList key={index} items={items.items} />;
					})}
				</ListItem>
			</List>
		</Box>
	);
};

export default Footer;
