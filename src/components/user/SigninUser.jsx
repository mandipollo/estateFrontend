import React from "react";
import StyledBox from "../styledComponents/StyledBox";
import StyledTextfield from "../styledComponents/StyledTextfield";
import StyledButton from "../styledComponents/StyledButton";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import VillaIcon from "@mui/icons-material/Villa";

const SigninUser = ({
	password,
	passwordHandler,
	isValidPassword,
	signInHandler,
}) => {
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
					justifyContent: "center",
					alignItems: "center",
					border: "0.1px solid rgba(71, 78, 104, 0.5)",
				}}
			>
				<Box flex={1} display="flex" justifyContent="center">
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
				</Box>
				<Box display="flex" justifyContent="flex-start" alignItems="center">
					<IconButton>
						<CloseIcon />
					</IconButton>
				</Box>
			</StyledBox>
			<StyledBox gap={4} m={2} flexDirection="column">
				<Box>
					<Typography fontFamily="ubuntu" variant="h6">
						Welcome back!
					</Typography>
				</Box>

				<Box component="form">
					<Typography fontFamily="ubuntu" variant="body2">
						Password
					</Typography>
					<StyledBox flexDirection="column" alignItems="center">
						<StyledTextfield
							type="password"
							value={password}
							onChange={passwordHandler}
							color="success"
							error={isValidPassword}
							helperText={isValidPassword ? "We need a password,please" : null}
						></StyledTextfield>
					</StyledBox>

					<StyledBox flexDirection="column" alignItems="center">
						<StyledButton
							onClick={signInHandler}
							size="large"
							disabled={isValidPassword}
							fullWidth
							sx={{ backgroundColor: "#01DEB6" }}
						>
							<Typography variant="body1" fontFamily="ubuntu">
								Sign in
							</Typography>
						</StyledButton>
					</StyledBox>
				</Box>
			</StyledBox>
		</Box>
	);
};

export default SigninUser;
