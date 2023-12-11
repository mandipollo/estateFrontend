import React from "react";
import { auth } from "../firebase.config";
import { set, ref } from "firebase/database";
import { database } from "../firebase.config";
import {
	Box,
	Grid,
	Typography,
	Card,
	CardHeader,
	CardContent,
	Paper,
} from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import StyledButton from "../components/styledComponents/StyledButton";
import SavedProperties from "../components/savedProperties/SavedProperties";

const MyEstatePage = () => {
	const userName = auth.currentUser.displayName;

	const createlistHandler = () => {};
	return (
		<Box display="flex" justifyContent="center" sx={{ width: "100vw" }}>
			<Grid
				container
				maxWidth={1250}
				display="flex"
				flexDirection={"column"}
				width="100%"
				gap={5}
				m="0 1em 1em 1em"
			>
				<Grid container item sx={{ height: 100, marginTop: 3 }}>
					<Grid item xs={6} sx={{ alignItems: "center", display: "flex" }}>
						<Typography fontFamily="ubuntu" variant="h4">
							Hello, {userName}
						</Typography>
					</Grid>
					<Grid
						container
						item
						xs={6}
						sx={{
							display: "flex",
							justifyContent: "flex-end",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<Grid
							item
							xs={12}
							sx={{
								justifyContent: "flex-end",
								display: "flex",
							}}
						>
							<StyledButton startIcon={<SettingsOutlinedIcon />}>
								<Typography>Account details</Typography>
							</StyledButton>
						</Grid>

						<Grid
							item
							xs={12}
							sx={{
								justifyContent: "flex-end",
								display: "flex",
							}}
						>
							<StyledButton startIcon={<ExitToAppOutlinedIcon />}>
								<Typography>Sign out</Typography>
							</StyledButton>
						</Grid>
					</Grid>
				</Grid>

				<SavedProperties />

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
								onClick={createlistHandler}
								startIcon={<AddOutlinedIcon />}
								size="large"
								sx={{ backgroundColor: "#01DEB6" }}
							>
								<Typography fontFamily="ubuntu">Create list</Typography>
							</StyledButton>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};

export default MyEstatePage;
