import React from "react";
import StyledBox from "../styledComponents/StyledBox";
import { Grid, Typography, Box, Button, IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";

const CardPropertyDescription = ({ data }) => {
	return (
		<>
			<StyledBox width="100%">
				<Grid container flexDirection="row">
					<Grid item xs>
						<Typography variant="h6">
							{data.data.address.displayAddress}
						</Typography>
					</Grid>

					<Grid item xs={1}>
						<IconButton color="warning">
							<FavoriteBorderOutlinedIcon />
						</IconButton>
					</Grid>
				</Grid>
			</StyledBox>
			<Box>
				<Typography variant="h5">{data.data.prices.primaryPrice}</Typography>
			</Box>

			<StyledBox width="100%">
				<Grid container flexDirection="row">
					<Grid item xs>
						<Button
							startIcon={<CalculateOutlinedIcon />}
							variant="text"
							disableRipple
							sx={{ textTransform: "none" }}
							color="success"
						>
							<Typography variant="body1">Monthly mortgage payments</Typography>
						</Button>
					</Grid>

					<Grid item xs={2}>
						<Typography variant="body2">
							{data.data.listingHistory.listingUpdateReason}
						</Typography>
					</Grid>
				</Grid>
			</StyledBox>
		</>
	);
};

export default CardPropertyDescription;
