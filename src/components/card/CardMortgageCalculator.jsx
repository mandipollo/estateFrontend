import React, { useState } from "react";

import { Grid, Typography, TextField, CircularProgress } from "@mui/material";
import CircularPercentage from "../CircularWithLabel";

const CardMortgageCalculator = () => {
	const [depositPercentage, setDepositPercentage] = useState(10);
	return (
		<Grid
			container
			border="1px solid rgba(0,0,0,0.2)"
			borderRadius="0.3rem"
			gap={1}
		>
			<Grid
				item
				xs={12}
				borderBottom="1px solid rgba(0,0,0,0.2)"
				justifyContent="center"
				alignItems="center"
				margin="0 2rem"
				padding="1rem 0"
			>
				<Typography variant="body1">Estate mortgage calculator</Typography>
			</Grid>
			<Grid item xs={12} margin="0 2rem">
				<Typography variant="body1" fontWeight={100}>
					Property price
				</Typography>
			</Grid>
			<Grid xs={12} item margin="0 2rem">
				<TextField variant="outlined" color="success" fullWidth></TextField>
			</Grid>
			<Grid item xs={12} margin="0 2rem">
				<Typography variant="body1" fontWeight={100}>
					Deposit
				</Typography>
			</Grid>
			<Grid
				container
				item
				xs={12}
				margin="0 2rem"
				justifyContent="space-between"
			>
				<Grid item xs={5.5}>
					<TextField variant="outlined" color="success" fullWidth></TextField>
				</Grid>
				<Grid container item xs={5.5} alignItems="center" gap={2}>
					<CircularPercentage percentage={20} />
					<Typography variant="body2" fontWeight={100} color="green">
						Lenders may expect more than a 10% deposit
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				item
				xs={12}
				margin="0 2rem"
				justifyContent="space-between"
			>
				<Grid item xs={5.5}>
					<Typography variant="body1" fontWeight={100}>
						Annual interest
					</Typography>
				</Grid>
				<Grid container item xs={5.5} alignItems="center" gap={2}>
					<Typography variant="body1" fontWeight={100}>
						Repayment period
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				item
				xs={12}
				margin="0 2rem"
				justifyContent="space-between"
			>
				<Grid item xs={5.5}>
					<TextField variant="outlined" color="success" fullWidth></TextField>
				</Grid>
				<Grid container item xs={5.5} alignItems="center" gap={2}>
					<TextField variant="outlined" color="success" fullWidth></TextField>
				</Grid>
			</Grid>
			<Grid
				item
				xs={12}
				margin="0 2rem"
				justifyContent="center"
				alignItems="center"
				display="flex"
				padding="1rem 0"
				gap={1}
			>
				<Typography variant="body1" fontWeight={100}>
					Monthly repayments:
				</Typography>
				<Typography variant="h4" fontWeight={100}>
					£32,000
				</Typography>
			</Grid>
		</Grid>
	);
};

export default CardMortgageCalculator;
