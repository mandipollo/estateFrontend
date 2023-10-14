import React from "react";
import CardLink from "../../card/CardLink";
import { Box } from "@mui/material";

const CardHomeLink = () => {
	return (
		<Box
			sx={{
				display: {
					sm: "none",
					md: "flex",
				},
				justifyContent: "center",
				flex: 1,
				height: 400,

				marginTop: 10,
			}}
		>
			<CardLink
				icon={"https://www.svgrepo.com/show/355487/search.svg"}
				title="Free home valuation"
				description="Find out how much your home's worth from an expert"
				link="Get a free agent valuation"
			></CardLink>
			<CardLink
				icon={"https://www.svgrepo.com/show/153974/office-block.svg"}
				title="Commercial property"
				description="Search freehold and leasehold properties in the UK"
				link="Search now"
			></CardLink>
			<CardLink
				icon={"https://www.svgrepo.com/show/503795/energy-saving.svg"}
				title="Enery efficieny"
				description="Check a home's energy efficieny and how to improve it"
				link="Learn now"
			></CardLink>
		</Box>
	);
};

export default CardHomeLink;
