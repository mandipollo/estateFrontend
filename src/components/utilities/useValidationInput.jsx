import { useState, useEffect } from "react";

const useValidateInput = (email, password) => {
	const [isEmailValid, setIsEmailValid] = useState(true);
	const [isPasswordValid, setIsPasswordValid] = useState(true);

	const validateEmail = value => {
		if (!value) return;
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const isValid = emailRegex.test(value);
		setIsEmailValid(isValid);
		return isValid;
	};

	const validatePassword = value => {
		if (!value) return;
		const isValid = value.length <= 6;
		setIsPasswordValid(isValid);

		return isValid;
	};

	useEffect(() => {
		validateEmail(email);
	}, [email]);

	useEffect(() => {
		validatePassword(password);
	}, [password]);
	return {
		isEmailValid,
		isPasswordValid,
	};
};

export default useValidateInput;
