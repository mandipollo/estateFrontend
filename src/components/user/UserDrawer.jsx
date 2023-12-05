import React, { useEffect } from "react";
import { useState } from "react";

import {
	Box,
	Drawer,
	IconButton,
	Typography,
	useMediaQuery,
} from "@mui/material";

import StyledButton from "../styledComponents/StyledButton";
import { PersonPinCircleOutlined } from "@mui/icons-material";
import VillaIcon from "@mui/icons-material/Villa";
import theme from "../../theme";
import StyledBox from "../styledComponents/StyledBox";
import StyledTextfield from "../styledComponents/StyledTextfield";

// utilities
import useValidateInput from "../utilities/useValidationInput";
import axios from "axios";

const UserDrawer = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { isEmailValid, isPasswordValid } = useValidateInput(email, password);

	const [accountExists, setAccountExists] = useState(false);

	const emailHandler = event => {
		setEmail(event.target.value);
	};

	const checkEmailHandler = async () => {
		const response = await axios.get(
			"https://us-central1-estate-2aef8.cloudfunctions.net/checkUser",
			{
				params: {
					email,
				},
			}
		);

		const data = await response.data;
		setAccountExists(data.exist);
		console.log(data);
	};

	const isLaptop = useMediaQuery(theme.breakpoints.down("laptop"));
	const [state, setState] = useState({
		right: false,
	});

	const toggleDrawer = (anchor, open) => event => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const signinOrSignup = anchor => (
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

	const createAccount = anchor => (
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
						Finish creating your account
					</Typography>
				</Box>

				<Box>
					<Typography fontFamily="ubuntu" variant="body2">
						First name
					</Typography>
					<StyledBox flexDirection="column" alignItems="center">
						<StyledTextfield color="success"></StyledTextfield>
					</StyledBox>

					<Typography fontFamily="ubuntu" variant="body2">
						Last name
					</Typography>
					<StyledBox flexDirection="column" alignItems="center">
						<StyledTextfield color="success"></StyledTextfield>
					</StyledBox>

					<Typography fontFamily="ubuntu" variant="body2">
						Password
					</Typography>
					<StyledBox flexDirection="column" alignItems="center">
						<StyledTextfield color="success"></StyledTextfield>
					</StyledBox>

					<StyledBox flexDirection="column" alignItems="center">
						<StyledButton
							size="large"
							fullWidth
							sx={{ backgroundColor: "#01DEB6" }}
						>
							<Typography variant="body1" fontFamily="ubuntu">
								Create an account
							</Typography>
						</StyledButton>
					</StyledBox>
				</Box>
			</StyledBox>
		</Box>
	);

	return (
		<div>
			{["right"].map(anchor => (
				<React.Fragment key={anchor}>
					{isLaptop ? (
						<IconButton color="success" onClick={toggleDrawer(anchor, true)}>
							<PersonPinCircleOutlined />
						</IconButton>
					) : (
						<StyledButton
							variant="outlined"
							color="success"
							onClick={toggleDrawer(anchor, true)}
						>
							<Typography variant="body1" color="black">
								Sign in
							</Typography>
						</StyledButton>
					)}

					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{signinOrSignup(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
};

export default UserDrawer;
