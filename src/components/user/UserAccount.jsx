import React from "react";
import { Box, Typography } from "@mui/material";

import VillaIcon from "@mui/icons-material/Villa";
import StyledBox from "../styledComponents/StyledBox";
import StyledButton from "../styledComponents/StyledButton";
import StyledTextfield from "../styledComponents/StyledTextfield";
import doggo from "../../assets/svg/siberian-husky-svgrepo-com.svg";

const UserAccount = ({
	checkEmailHandler,
	emailHandler,
	isEmailValid,
	email,
	error,
}) => {
	return (
		<Box
			component="form"
			onSubmit={e => checkEmailHandler(e)}
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
							onClick={e => checkEmailHandler(e)}
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
			</StyledBox>
			<StyledBox position="absolute" bottom={2} width="100%" height={250}>
				<img src={doggo} width="100%" height="100%" viewBox="0 0 100 100"></img>
			</StyledBox>
		</Box>
	);
};

export default UserAccount;
