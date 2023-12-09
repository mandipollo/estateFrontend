import React from "react";
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Box,
	Button,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StyledButton from "../styledComponents/StyledButton";

const CardCustomer = ({ customer, tele }) => {
	return (
		<Card
			sx={{
				display: "flex",
				flexDirection: "column",
				margin: "2em 1em",
				height: 300,
				width: 350,
				position: "sticky",
				top: 0,
			}}
		>
			<Box sx={{ display: "flex", flexDirection: "row", gap: 1, margin: 1 }}>
				<CardContent
					sx={{ gap: 1, display: "flex", flexDirection: "column", flex: 8 }}
				>
					<Typography variant="body2" fontWeight={100}>
						MARKETED BY
					</Typography>
					<Typography variant="body2">{customer.branchDisplayName}</Typography>
					<Typography variant="body2" fontWeight={100}>
						{customer.displayAddress}
					</Typography>
				</CardContent>
				<Box
					sx={{
						display: "flex",
						flex: 4,
						alignItems: "Center",
						justifyContent: "Center",
					}}
				>
					<CardMedia component="img" image={customer.logoPath} />
				</Box>
			</Box>
			<Box
				sx={{
					display: "flex",
					flex: 1,
					backgroundColor: "#435585",
					flexDirection: "column",
					margin: 1,
					gap: 1,
					justifyContent: "Center",
					alignItems: "center",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
					}}
				>
					<Typography variant="body1" color="#97FEED">
						Call developer:
					</Typography>
					<Typography variant="body1" color="white">
						{tele}
					</Typography>
				</Box>

				<StyledButton
					size="large"
					sx={{
						width: "90%",
						backgroundColor: "#01DEB6",
						padding: "1em",
					}}
					variant="outlined"
					startIcon=<MailOutlineIcon />
				>
					<Typography>Request details</Typography>
				</StyledButton>
			</Box>
		</Card>
	);
};

export default CardCustomer;
