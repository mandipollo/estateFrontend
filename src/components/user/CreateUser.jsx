import React from "react";

import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import VillaIcon from "@mui/icons-material/Villa";
import StyledBox from "../styledComponents/StyledBox";
import StyledButton from "../styledComponents/StyledButton";
import StyledTextfield from "../styledComponents/StyledTextfield";

const CreateUser = ({
	navigateBack,
	firstName,
	firstNameHandler,
	lastName,
	lastNameHandler,
	passsword,
	passwordHandler,
	isPasswordValid,
	createUserHandler,
	error,
}) => {
	return (
		<Box
			component="form"
			onSubmit={e => createUserHandler(e)}
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
				<Box display="flex" justifyContent="flex-start" alignItems="center">
					<IconButton onClick={navigateBack}>
						<ArrowBackIcon />
					</IconButton>
				</Box>

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
						Finish creating your account
					</Typography>
				</Box>

				<Box>
					<Typography fontFamily="ubuntu" variant="body2">
						First name
					</Typography>
					<StyledBox flexDirection="column" alignItems="center">
						<StyledTextfield
							onChange={firstNameHandler}
							value={firstName}
							color="success"
						></StyledTextfield>
					</StyledBox>

					<Typography fontFamily="ubuntu" variant="body2">
						Last name
					</Typography>
					<StyledBox flexDirection="column" alignItems="center">
						<StyledTextfield
							onChange={lastNameHandler}
							value={lastName}
							color="success"
						></StyledTextfield>
					</StyledBox>

					<Typography fontFamily="ubuntu" variant="body2">
						Password
					</Typography>
					<StyledBox flexDirection="column" alignItems="center">
						<StyledTextfield
							onChange={passwordHandler}
							value={passsword}
							color="success"
							error={isPasswordValid}
							helperText={
								isPasswordValid ? "Password needs to be 6 character" : null
							}
						></StyledTextfield>
					</StyledBox>

					<StyledBox flexDirection="column" alignItems="center">
						<StyledButton
							onClick={e => createUserHandler(e)}
							disabled={isPasswordValid}
							size="large"
							fullWidth
							sx={{ backgroundColor: "#01DEB6" }}
						>
							<Typography variant="body1" fontFamily="ubuntu">
								Create an account
							</Typography>
						</StyledButton>
					</StyledBox>

					{error && (
						<StyledBox
							padding={2}
							sx={{ backgroundColor: "#FAE7E6", borderRadius: "1em" }}
							alignItems="center"
						>
							<Typography variant="body1" color="red" fontFamily="ubuntu">
								{error}
							</Typography>
						</StyledBox>
					)}
				</Box>
			</StyledBox>
		</Box>
	);
};

export default CreateUser;
