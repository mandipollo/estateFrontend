import React from "react";
import { Box, ListItem, List, Divider, ListItemButton } from "@mui/material";
import StyledListFooter from "../../styledComponents/StyledListFooter";
import FooterList, { listData } from "./FooterList";

const Footer = () => {
	return (
		<Box
			sx={{
				backgroundColor: "#EAEAEA",
				width: "100%",
				padding: "30px 0",
			}}
		>
			<List
				sx={{
					color: "grey",
					fontSize: 14,
				}}
			>
				<ListItem
					sx={{
						display: "flex",
						justifyContent: "space-around",
						alignItems: "flex-start",
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
