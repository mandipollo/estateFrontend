import React from "react";
import { Box, Typography } from "@mui/material";

import VillaIcon from "@mui/icons-material/Villa";
import StyledBox from "../styledComponents/StyledBox";
import StyledButton from "../styledComponents/StyledButton";
import StyledTextfield from "../styledComponents/StyledTextfield";

const UserAccount = ({
	checkEmailHandler,
	emailHandler,
	isEmailValid,
	email,
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
						Sign in or create an account
					</Typography>
				</Box>

				<Box
					component="form"
					autoComplete="off"
					sx={{
						"& .MuiTextField-root": { m: "0.5em 0" },
					}}
				>
					<Typography fontFamily="ubuntu" variant="body2">
						Email address
					</Typography>
					<StyledBox flexDirection="column" alignItems="center">
						<StyledTextfield
							color="success"
							onChange={emailHandler}
							value={email}
							error={!isEmailValid}
							helperText={!isEmailValid ? "invalid email address" : null}
						></StyledTextfield>
						<StyledButton
							disabled={!isEmailValid}
							onClick={checkEmailHandler}
							size="large"
							fullWidth
							sx={{ backgroundColor: "#01DEB6" }}
						>
							<Typography variant="body1" fontFamily="ubuntu">
								Continue
							</Typography>
						</StyledButton>
					</StyledBox>
				</Box>
			</StyledBox>
		</Box>
	);
};

export default UserAccount;
