import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
	Box,
	Divider,
	Drawer,
	IconButton,
	ListItem,
	List,
} from "@mui/material";

import StyledTypographyNav from "../styledComponents/StyledTypographyNav";
import StyledButton from "../styledComponents/StyledButton";
import rocket from "../../assets/svg/rocket-svgrepo-com.svg";
import StyledBox from "../styledComponents/StyledBox";

const DrawerNavbar = ({ pages }) => {
	const [state, setState] = useState({
		left: false,
	});

	const toggleDrawer = (anchor, open) => event => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = anchor => (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "Center",
					alignItems: "Center",
				}}
			>
				{pages.map((item, index) => (
					<Link
						style={{ textDecoration: "none", color: "inherit", width: "100%" }}
						to={item.link}
						key={index}
					>
						<ListItem key={index} disablePadding>
							<StyledButton fullWidth disabled={item.disable} key={index}>
								<StyledTypographyNav>{item.label}</StyledTypographyNav>
							</StyledButton>
						</ListItem>
						<Divider />
					</Link>
				))}
			</List>
			<StyledBox position="absolute" bottom={2} width="100%" height={150}>
				<img
					src={rocket}
					width="100%"
					height="100%"
					viewBox="0 0 100 100"
				></img>
			</StyledBox>
		</Box>
	);

	return (
		<div>
			{["left"].map(anchor => (
				<React.Fragment key={anchor}>
					<IconButton onClick={toggleDrawer(anchor, true)}>
						<MenuIcon />
					</IconButton>

					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
};

export default DrawerNavbar;
