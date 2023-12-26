import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// firebase
import { auth } from "../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { set, ref } from "firebase/database";
import { database } from "../../firebase.config";

//material ui

import { Drawer, IconButton, Typography, useMediaQuery } from "@mui/material";
import { PersonPinCircleOutlined } from "@mui/icons-material";
import theme from "../../theme";

// utilities
import useValidateInput from "../utilities/useValidationInput";
import axios from "axios";

// components
import StyledButton from "../styledComponents/StyledButton";
import UserAccount from "./UserAccount";
import CreateUser from "./CreateUser";
import SigninUser from "./SigninUser";

import { useDispatch, useSelector } from "react-redux";
import { setUser, resetUser } from "../../store/user";
import { openDrawer, closeDrawer } from "../../store/drawer";
import UserProfile from "./UserProfile";

const UserDrawer = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const userState = useSelector(state => state.user);

	const [error, setError] = useState(null);
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");

	const { isEmailValid, isPasswordValid } = useValidateInput(email, password);

	const [checkEmail, setCheckEmail] = useState(false);
	const [createUser, setCreateUser] = useState(false);

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

	const navigateBack = () => {};
	const isLaptop = useMediaQuery(theme.breakpoints.down("laptop"));

	// drawer
	const drawer = useSelector(state => state.drawer);

	const handleOpenDrawer = () => {
		dispatch(openDrawer());
	};

	const hanldleCloseDrawer = () => {
		dispatch(closeDrawer());
	};
	// reset signIn

	const resetSignInHandler = () => {
		setCheckEmail(false);
		setCreateUser(false);
	};
	const checkEmailHandler = async e => {
		e.preventDefault();
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
			setCheckEmail(data.exists);
			setError(null);
			if (!data.exists) {
				setCreateUser(true);
			}
		} catch (error) {
			setError(error.message);
		}
	};

	const createUserHandler = async e => {
		e.preventDefault();
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

			await set(ref(database, `users/${data.uid}`), {
				savedProperties: false,
				propertyList: false,
			});

			setCreateUser(false);
			setError(null);
		} catch (error) {
			console.error(error);
			setError(error.message);
		}
	};

	const signInHandler = async e => {
		e.preventDefault();
		try {
			const response = await signInWithEmailAndPassword(auth, email, password);
			const data = response.user;

			dispatch(
				setUser({ name: data.displayName, uid: data.uid, email: data.email })
			);
			setPassword("");
			setError(null);
			setCreateUser(false);
			setError(null);
		} catch (error) {
			setError(error.message);
		}
	};
	const signOutHandler = async e => {
		e.preventDefault();
		try {
			await auth.signOut();
			dispatch(resetUser());
			setCheckEmail(false);
			navigate("/");
			setError(null);
		} catch (error) {
			console.log(error);
			setError(error.message);
		}
	};
	return (
		<div>
			<React.Fragment>
				{isLaptop ? (
					<IconButton color="success" onClick={handleOpenDrawer}>
						<PersonPinCircleOutlined />
					</IconButton>
				) : (
					<StyledButton
						sx={{ backgroundColor: "#01DEB6" }}
						startIcon={
							userState.status && (
								<PersonPinCircleOutlined sx={{ color: "black" }} />
							)
						}
						size="large"
						variant="contained"
						onClick={handleOpenDrawer}
					>
						<Typography variant="body1" color="black">
							{userState.status ? "My Estate" : "Sign in"}
						</Typography>
					</StyledButton>
				)}

				<Drawer anchor={"right"} open={drawer} onClose={hanldleCloseDrawer}>
					{!checkEmail && !auth.currentUser && !createUser && (
						<UserAccount
							error={error}
							checkEmailHandler={checkEmailHandler}
							emailHandler={emailHandler}
							email={email}
							isEmailValid={isEmailValid}
						/>
					)}
					{!checkEmail && !auth.currentUser && createUser && (
						<CreateUser
							error={error}
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
					{checkEmail && !auth.currentUser && (
						<SigninUser
							resetSignInHandler={resetSignInHandler}
							password={password}
							passwordHandler={passwordHandler}
							isValidPassword={isPasswordValid}
							signInHandler={signInHandler}
							errorCredentials={error}
						/>
					)}

					{auth.currentUser && (
						<UserProfile
							signOutHandler={signOutHandler}
							userName={userState.userDetail.name}
						/>
					)}
				</Drawer>
			</React.Fragment>
		</div>
	);
};

export default UserDrawer;
