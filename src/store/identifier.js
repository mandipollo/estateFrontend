import { createSlice } from "@reduxjs/toolkit";

const identifier = createSlice({
	name: "identifier",
	initialState: [],
	reducers: {
		setIdentifierHandler: (state, action) => {
			return action.payload;
		},
		resetIdentifierHandler: state => {
			return [];
		},
	},
});

export const { setIdentifierHandler, resetIdentifierHandler } =
	identifier.actions;

export default identifier.reducer;
