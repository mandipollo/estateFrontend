import React from "react";
import { Grid, CardContent, Typography, Card } from "@mui/material";
import StyledButton from "../styledComponents/StyledButton";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const CollectionList = () => {
	const createListHandler = () => {};
	return (
		<Grid item>
			<Card elevation={7}>
				<CardContent sx={{ margin: 2 }}>
					<Typography variant="h6">Properties collection lists</Typography>
				</CardContent>
				<CardContent
					sx={{
						backgroundColor: "#F2F1EB",
						margin: 2,
						borderRadius: "0.5em",
						justifyContent: "center",
						alignItems: "center",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<img
						src="https://www.svgrepo.com/show/489643/list-list.svg"
						width="164"
						height="164"
						viewBox="0 0 64 64"
					/>
					<Typography fontFamily="ubuntu" variant="h6">
						You don't have any lists yet
					</Typography>
					<Typography fontFamily="ubuntu" variant="h6">
						Organise your saved properties into lists
					</Typography>

					<StyledButton
						onClick={createListHandler}
						startIcon={<AddOutlinedIcon />}
						size="large"
						sx={{ backgroundColor: "#01DEB6" }}
					>
						<Typography fontFamily="ubuntu">Create list</Typography>
					</StyledButton>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default CollectionList;
