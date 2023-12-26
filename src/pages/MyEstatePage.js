import React from "react";
import { auth } from "../firebase.config";
import { Box, Grid, Typography } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

import StyledButton from "../components/styledComponents/StyledButton";
import SavedProperties from "../components/savedProperties/SavedProperties";
import CollectionList from "../components/savedProperties/CollectionList";

const MyEstatePage = () => {
	const userName = auth.currentUser.displayName;

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
				<CollectionList />
			</Grid>
		</Box>
	);
};

export default MyEstatePage;
