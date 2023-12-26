import React from "react";
import StyledBox from "../styledComponents/StyledBox";
import StyledTextfield from "../styledComponents/StyledTextfield";
import StyledButton from "../styledComponents/StyledButton";
import { Box, Typography, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import VillaIcon from "@mui/icons-material/Villa";

const SigninUser = ({
	password,
	passwordHandler,
	isValidPassword,
	signInHandler,
	resetSignInHandler,
	errorCredentials,
}) => {
	return (
		<Box
			component="form"
			onSubmit={e => signInHandler(e)}
			sx={{
				width: 350,
				display: "flex",
				flexDirection: "column",
			}}
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
					<IconButton onClick={resetSignInHandler}>
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

				<Box>
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
						></StyledTextfield>
					</StyledBox>

					<StyledBox flexDirection="column" alignItems="center">
						<StyledButton
							onClick={e => signInHandler(e)}
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
					{errorCredentials && (
						<StyledBox
							padding={2}
							sx={{ backgroundColor: "#FAE7E6", borderRadius: "1em" }}
							alignItems="center"
						>
							<Typography variant="body1" color="red" fontFamily="ubuntu">
								"Incorrect sign in details. Please try again."
							</Typography>
						</StyledBox>
					)}
				</Box>
			</StyledBox>
		</Box>
	);
};

export default SigninUser;
