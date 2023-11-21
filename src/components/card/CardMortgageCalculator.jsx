import React, { useState, useEffect } from "react";

import { Grid, Typography, TextField, InputAdornment } from "@mui/material";
import CircularPercentage from "../CircularWithLabel";

const CardMortgageCalculator = ({ propertyPrice }) => {
	const [deposit, setDeposit] = useState(propertyPrice * 0.1);
	const [annualInterest, setAnnualInterest] = useState(6.1);
	const [repaymentYears, setRepaymentYears] = useState(25);

	const [depositPercentage, setDepositPercentage] = useState(10);

	const [monthlyRepayments, setMonthlyrepayments] = useState(null);

	const percentageHandler = () => {
		setDepositPercentage(Math.round((deposit / propertyPrice) * 100));
	};

	const monthlyRepaymentsHandler = () => {
		const principal = propertyPrice - deposit;
		const totalPayments = 12 * repaymentYears;
		const monthlyInterestRate = annualInterest / 100 / 12;
		const monthlyRepayments = Math.round(
			(principal *
				(monthlyInterestRate *
					Math.pow(1 + monthlyInterestRate, totalPayments))) /
				(Math.pow(1 + monthlyInterestRate, totalPayments) - 1)
		);

		setMonthlyrepayments(monthlyRepayments);
	};

	useEffect(() => {
		monthlyRepaymentsHandler();
	}, [deposit, repaymentYears, annualInterest]);

	useEffect(() => {
		percentageHandler();
	}, [deposit]);
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
				<TextField
					value={propertyPrice}
					variant="outlined"
					color="success"
					fullWidth
					InputProps={{
						startAdornment: <InputAdornment position="start">£</InputAdornment>,
					}}
				></TextField>
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
					<TextField
						value={deposit}
						onChange={e => {
							setDeposit(e.target.value);
						}}
						variant="outlined"
						color="success"
						fullWidth
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">£</InputAdornment>
							),
						}}
					></TextField>
				</Grid>
				<Grid container item xs={5.5} alignItems="center" gap={2}>
					<CircularPercentage
						percentage={depositPercentage}
						percentageHandler={percentageHandler}
					/>
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
					<TextField
						value={annualInterest}
						onChange={e => {
							setAnnualInterest(e.target.value);
						}}
						variant="outlined"
						color="success"
						fullWidth
						InputProps={{
							endAdornment: (
								<InputAdornment
									sx={{ position: "absolute", left: 35 }}
									position="end"
								>
									%
								</InputAdornment>
							),
						}}
					></TextField>
				</Grid>
				<Grid container item xs={5.5} alignItems="center" gap={2}>
					<TextField
						value={repaymentYears}
						onChange={e => {
							setRepaymentYears(e.target.value);
						}}
						variant="outlined"
						color="success"
						fullWidth
						InputProps={{
							endAdornment: (
								<InputAdornment
									sx={{ position: "absolute", left: 35 }}
									position="end"
								>
									Years
								</InputAdornment>
							),
						}}
					></TextField>
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
					£{monthlyRepayments}
				</Typography>
			</Grid>
		</Grid>
	);
};

export default CardMortgageCalculator;
