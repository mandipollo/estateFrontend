import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

import VillaIcon from "@mui/icons-material/Villa";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import StyledBox from "../styledComponents/StyledBox";
import StyledButton from "../styledComponents/StyledButton";

const UserProfile = ({ signOutHandler, userName }) => {
	return (
		<Box
			component="form"
			onSubmit={e => signOutHandler(e)}
			sx={{
				width: 350,
				display: "flex",
				flexDirection: "column",
			}}
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
			<StyledBox gap={4} margin="0 1em" flexDirection="column">
				<Box>
					<Typography fontFamily="ubuntu" variant="h6">
						Hello, {userName}
					</Typography>
				</Box>

				<StyledBox alignItems="center" justifyContent="center">
					<Link
						to="/myEstate"
						style={{
							textDecoration: "none",
							color: "inherit",
							width: "100%",
						}}
					>
						<Button
							fullWidth
							size="large"
							sx={{
								backgroundColor: "#01DEB6",
								m: 0,
								textTransform: "none",
								borderRadius: "0.5em",
								"&:hover": {
									backgroundColor: "#45FFCA",
								},
							}}
						>
							<Typography variant="body1">View My Estate</Typography>
						</Button>
					</Link>
				</StyledBox>

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

				<StyledBox
					flexDirection="column"
					alignItems="center"
					autoComplete="off"
					sx={{
						"& .MuiTextField-root": { m: "0.5em 0" },
					}}
				>
					<Button
						variant="contained"
						onClick={e => signOutHandler(e)}
						size="large"
						color="warning"
						fullWidth
					>
						<Typography variant="body1" fontFamily="ubuntu">
							Signout
						</Typography>
					</Button>
				</StyledBox>
			</StyledBox>
		</Box>
	);
};

export default UserProfile;
