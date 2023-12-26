import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Box,
	Paper,
	useMediaQuery,
	Grid,
	Typography,
	Button,
} from "@mui/material";
import theme from "../../../theme";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import SavedPropertiesCard from "./SavedPropCard";
import useSaveProp from "../../utilities/useSaveProp";
import { useSelector } from "react-redux";

const SavedPropertiesHome = () => {
	const isLaptop = useMediaQuery(theme.breakpoints.down("laptop"));

	useSaveProp();

	const userPropSaved = useSelector(state => state.savedUserProperty);
	const arrayOfPropSaved = userPropSaved ? Object.values(userPropSaved) : null;
	console.log(arrayOfPropSaved);

	return (
		<Box
			display="flex"
			sx={{
				justifyContent: "center",
				margin: "2em",
				flexDirection: "column",
				gap: 4,
				overflowX: "auto",
			}}
		>
			<Box flex={4} sx={{ display: "flex", justifyContent: "space-between" }}>
				<Typography variant="h5" fontFamily="ubuntu">
					Saved properties
				</Typography>
				<Link to="/myEstate">
					<Button
						color="secondary"
						startIcon={<SettingsOutlinedIcon />}
						variant="contained"
					>
						<Typography variant="body2">Manage property</Typography>
					</Button>
				</Link>
			</Box>
			<Box flex={8}>
				<Grid container flexWrap="nowrap" gap={1}>
					{arrayOfPropSaved &&
						arrayOfPropSaved.map(prop => (
							<SavedPropertiesCard
								sale={prop.sale}
								key={prop.propertyId}
								images={prop.image}
								displayAddress={prop.address}
								propertySubType={prop.propertyType}
								bedrooms={prop.bedrooms}
								bathrooms={prop.bathrooms}
								summary={prop.summary}
								displayPrice={prop.price}
								customerImage={prop.customerImage}
								contactNo={prop.contactNo}
								propertyId={prop.propertyId}
							/>
						))}
				</Grid>
			</Box>
		</Box>
	);
};

export default SavedPropertiesHome;
