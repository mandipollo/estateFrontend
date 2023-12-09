import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
	name: "user",
	initialState: {
		status: false,
		userDetail: null,
	},
	reducers: {
		setUser: (state, action) => {
			return { ...state, status: true, userDetail: action.payload };
		},

		resetUser: state => {
			return { ...state, status: false, userDetail: "" };
		},
	},
});

export const { setUser, resetUser } = user.actions;

export default user.reducer;
