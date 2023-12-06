import React from "react";
import { useState } from "react";

import { Drawer, IconButton, Typography, useMediaQuery } from "@mui/material";

import StyledButton from "../styledComponents/StyledButton";
import { PersonPinCircleOutlined } from "@mui/icons-material";

import theme from "../../theme";

// utilities
import useValidateInput from "../utilities/useValidationInput";
import axios from "axios";

// components
import UserAccount from "./UserAccount";
import CreateUser from "./CreateUser";

const UserDrawer = () => {
	const [error, setError] = useState(null);
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");

	const { isEmailValid, isPasswordValid } = useValidateInput(email, password);

	const [accountExists, setAccountExists] = useState(false);
	const [accountChecked, setAccountChecked] = useState(false);

	const emailHandler = event => {
		setEmail(event.target.value);
	};

	const firstNameHandler = e => {
		setFirstName(e.target.value);
	};
	const lastNameHandler = e => {
		setLastName(e.target.value);
	};

	const passwordHandler = e => {
		setPassword(e.target.value);
	};

	const navigateBack = () => {
		setAccountChecked(false);
		setAccountExists(false);
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

	const checkEmailHandler = async () => {
		try {
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
			setAccountChecked(true);
		} catch (error) {
			console.log(error);
		}
	};

	const createUserHandler = async () => {
		try {
			const response = await axios.post(
				"https://us-central1-estate-2aef8.cloudfunctions.net/createUser",

				{
					email: email,
					password: password,
					firstName: firstName,
					lastName: lastName,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			const data = await response.data;
			console.log(data);
		} catch (error) {
			console.error(error);
			setError(error);
		}
	};

	console.log(error);
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
						{!accountChecked && (
							<UserAccount
								checkEmailHandler={checkEmailHandler}
								emailHandler={emailHandler}
								email={email}
								isEmailValid={isEmailValid}
							/>
						)}
						{!accountExists && accountChecked && (
							<CreateUser
								navigateBack={navigateBack}
								firstName={firstName}
								firstNameHandler={firstNameHandler}
								lastName={lastName}
								lastNameHandler={lastNameHandler}
								passsword={password}
								passwordHandler={passwordHandler}
								isPasswordValid={isPasswordValid}
								createUserHandler={createUserHandler}
							/>
						)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
};

export default UserDrawer;
