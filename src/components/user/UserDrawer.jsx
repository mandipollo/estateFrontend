import React from "react";
import { useState } from "react";

// firebase
import { auth } from "../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

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
import SigninUser from "./SigninUser";

import { useDispatch, useSelector } from "react-redux";
import { setUser, resetUser } from "../../store/user";
import UserProfile from "./UserProfile";

const UserDrawer = () => {
	const dispatch = useDispatch();
	const userState = useSelector(state => state.user);

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

	// reset signIn

	const resetSignInHandler = () => {
		setAccountChecked(false);
		setAccountExists(false);
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

			setAccountExists(true);
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

			setAccountExists(data.exists);
			setAccountChecked(true);
		} catch (error) {
			console.error(error);
			setError(error);
		}
	};

	const signInHandler = async () => {
		try {
			const response = await signInWithEmailAndPassword(auth, email, password);
			const data = response.user;

			dispatch(
				setUser({ name: data.displayName, uid: data.uid, email: data.email })
			);
			setPassword("");
			setError(null);
		} catch (error) {
			setError(error);
		}
	};
	const signOutHandler = async () => {
		try {
			await auth.signOut();
			dispatch(resetUser());

			setAccountChecked(false);
			setAccountExists(false);
		} catch (error) {
			console.log(error);
		}
	};
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
							sx={{ backgroundColor: "#01DEB6" }}
							startIcon={
								userState.status ? (
									<PersonPinCircleOutlined sx={{ color: "black" }} />
								) : (
									""
								)
							}
							size="large"
							variant="contained"
							onClick={toggleDrawer(anchor, true)}
						>
							<Typography variant="body1" color="black">
								{userState.status ? "My Estate" : "Sign in"}
							</Typography>
						</StyledButton>
					)}

					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{!accountChecked && !userState.status && (
							<UserAccount
								checkEmailHandler={checkEmailHandler}
								emailHandler={emailHandler}
								email={email}
								isEmailValid={isEmailValid}
							/>
						)}
						{!accountExists && accountChecked && !userState.status && (
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
						{accountExists && accountChecked && !userState.status && (
							<SigninUser
								resetSignInHandler={resetSignInHandler}
								password={password}
								passwordHandler={passwordHandler}
								isValidPassword={isPasswordValid}
								signInHandler={signInHandler}
								errorCredentials={error}
							/>
						)}

						{userState.status && (
							<UserProfile
								signOutHandler={signOutHandler}
								userName={userState.userDetail.name}
							/>
						)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
};

export default UserDrawer;
