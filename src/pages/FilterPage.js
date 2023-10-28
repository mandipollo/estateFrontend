import React from "react";
import {
	Box,
	FormControl,
	FormLabel,
	Input,
	MenuItem,
	Select,
	Typography,
	Grid,
	Container,
	TextField,
	Button,
} from "@mui/material";

// state
import { useSelector } from "react-redux/es/hooks/useSelector";
import StyledTextfieldSelect from "../components/styledComponents/StyledTextfieldSelect";

const FilterPage = () => {
	const identifier = useSelector(state => state.identifier);
	console.log(identifier);
	return (
		<Box
			sx={{
				display: "flex",
				flex: 1,
				flexDirection: "column",
				paddingTop: 4,
				maxWidth: {
					md: 900,
				},
			}}
		>
			<Typography variant="h6">
				Property for sale in {identifier.displayName}
			</Typography>

			<form>
				<Grid container spacing={2} padding="20px 0 20px 0">
					<Grid container item xs={6} spacing={2}>
						<Grid container item spacing={2}>
							<Grid item xs={4}>
								<FormLabel>Search radius</FormLabel>
							</Grid>
							<Grid item xs>
								<StyledTextfieldSelect size="small" placeholder="datas" select>
									<MenuItem>1</MenuItem>
									<MenuItem>1</MenuItem>
									<MenuItem>1</MenuItem>
								</StyledTextfieldSelect>
							</Grid>
						</Grid>
						<Grid container item spacing={2}>
							<Grid item xs={4}>
								<FormLabel>Price range (£)</FormLabel>
							</Grid>
							<Grid container spacing={1} item xs>
								<Grid item xs={6}>
									<StyledTextfieldSelect
										size="small"
										placeholder="datas"
										select
									>
										<MenuItem>1</MenuItem>
										<MenuItem>1</MenuItem>
										<MenuItem>1</MenuItem>
									</StyledTextfieldSelect>
								</Grid>
								<Grid item xs={6}>
									<StyledTextfieldSelect
										size="small"
										placeholder="datas"
										select
									>
										<MenuItem>1</MenuItem>
										<MenuItem>1</MenuItem>
										<MenuItem>1</MenuItem>
									</StyledTextfieldSelect>
								</Grid>
							</Grid>
						</Grid>
						<Grid container item spacing={2}>
							<Grid item xs={4}>
								<FormLabel>No. of bedrooms</FormLabel>
							</Grid>
							<Grid container spacing={1} item xs>
								<Grid item xs={6}>
									<StyledTextfieldSelect
										size="small"
										placeholder="datas"
										select
									>
										<MenuItem>1</MenuItem>
										<MenuItem>1</MenuItem>
										<MenuItem>1</MenuItem>
									</StyledTextfieldSelect>
								</Grid>
								<Grid item xs={6}>
									<StyledTextfieldSelect
										size="small"
										placeholder="datas"
										select
									>
										<MenuItem>1</MenuItem>
										<MenuItem>1</MenuItem>
										<MenuItem>1</MenuItem>
									</StyledTextfieldSelect>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid container item xs={6} spacing={2}>
						<Grid container item spacing={2}>
							<Grid item xs={4}>
								<FormLabel>Property type</FormLabel>
							</Grid>
							<Grid item xs>
								<StyledTextfieldSelect size="small" placeholder="datas" select>
									<MenuItem>1</MenuItem>
									<MenuItem>1</MenuItem>
									<MenuItem>1</MenuItem>
								</StyledTextfieldSelect>
							</Grid>
						</Grid>
						<Grid container item spacing={2}>
							<Grid item xs={4}>
								<FormLabel>Added to site</FormLabel>
							</Grid>
							<Grid item xs>
								<StyledTextfieldSelect size="small" placeholder="datas" select>
									<MenuItem>1</MenuItem>
									<MenuItem>1</MenuItem>
									<MenuItem>1</MenuItem>
								</StyledTextfieldSelect>
							</Grid>
						</Grid>
						<Grid container item spacing={2}>
							<Grid item xs={4}>
								<FormLabel>Added to site</FormLabel>
							</Grid>
							<Grid item xs>
								<StyledTextfieldSelect size="small" placeholder="datas" select>
									<MenuItem>1</MenuItem>
									<MenuItem>1</MenuItem>
									<MenuItem>1</MenuItem>
								</StyledTextfieldSelect>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</form>
		</Box>
	);
};

export default FilterPage;
