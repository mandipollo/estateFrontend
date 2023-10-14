import React from "react";
import StyledListFooter from "../../styledComponents/StyledListFooter";
import { ListItem, ListItemButton } from "@mui/material";

export const listData = [
	{
		items: [
			"Estate",
			"Search for sale",
			"Search for rent",
			"Commercial for sale",
			"Commercial for rent",
			"Search sold prices",
			"Blog",
		],
	},
	{
		items: [
			"Resources",
			"Where can i live?",
			"Stamp duty",
			"Students",
			"Removals",
			"Property guides",
			"House price index",
			"Help to buy",
		],
	},
	{
		items: [
			"Quick links",
			"Cheap flats to rent",
			"Property investments",
			"Cheap houses for sale",
			"Find a agent",
		],
	},
	{
		items: [
			"Estate PLC",
			"About",
			"Press center",
			"Investor relations",
			"Contact us",
			"Careers",
		],
	},
];

const FooterList = ({ items }) => {
	return (
		<StyledListFooter>
			{items.map((item, index) => {
				return (
					<ListItem key={index} disablePadding>
						<ListItemButton disableRipple>{item}</ListItemButton>
					</ListItem>
				);
			})}
		</StyledListFooter>
	);
};
export default FooterList;
