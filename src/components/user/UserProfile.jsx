import React from "react";
import { Box, Typography, Button } from "@mui/material";

import VillaIcon from "@mui/icons-material/Villa";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import StyledBox from "../styledComponents/StyledBox";
import StyledButton from "../styledComponents/StyledButton";

const UserProfile = ({ signOutHandler, userName }) => {
	return (
		<Box
			sx={{
				width: 350,
				display: "flex",
				flexDirection: "column",
			}}
			role="presentation"
		>
			<StyledBox
				sx={{
					height: 50,
					alignItems: "center",
					border: "0.1px solid rgba(71, 78, 104, 0.5)",
				}}
			>
				<StyledButton
					sx={{ border: "none" }}
					color="success"
					variant="outlined"
					endIcon=<VillaIcon />
				>
					<Typography color="black" variant="h6">
						Estate
					</Typography>
				</StyledButton>
			</StyledBox>
			<StyledBox gap={4} m={2} flexDirection="column">
				<Box>
					<Typography fontFamily="ubuntu" variant="h6">
						Hello, {userName}
					</Typography>
				</Box>
				<Box
					sx={{
						padding: "2em 0",
						borderBottom: "0.1px solid rgba(71, 78, 104, 0.5)",
					}}
				>
					<StyledButton
						color="success"
						startIcon={<FavoriteBorderOutlinedIcon sx={{ color: "black" }} />}
					>
						<Typography>Saved properties</Typography>
					</StyledButton>
					<Typography>Show one of the saved properties</Typography>
				</Box>
				<Box
					sx={{
						borderBottom: "0.1px solid rgba(71, 78, 104, 0.5)",
					}}
				>
					<StyledButton color="success">
						<Typography>Property Lists</Typography>
					</StyledButton>
					<Typography variant="body1">
						Organise your saved properties into lists
					</Typography>
					<StyledButton
						startIcon={<AddOutlinedIcon />}
						size="large"
						variant="contained"
					>
						<Typography>Create a list</Typography>
					</StyledButton>
				</Box>

				<Box
					component="form"
					autoComplete="off"
					sx={{
						"& .MuiTextField-root": { m: "0.5em 0" },
					}}
				>
					<StyledBox flexDirection="column" alignItems="center">
						<StyledButton
							onClick={signOutHandler}
							size="large"
							fullWidth
							sx={{ backgroundColor: "#01DEB6" }}
						>
							<Typography variant="body1" fontFamily="ubuntu">
								Signout
							</Typography>
						</StyledButton>
					</StyledBox>
				</Box>
			</StyledBox>
		</Box>
	);
};

export default UserProfile;
