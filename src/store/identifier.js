import { createSlice } from "@reduxjs/toolkit";

const identifier = createSlice({
	name: "identifier",
	initialState: null,
	reducers: {
		setIdentifierHandler: (state, action) => {
			return (state = action.payload);
		},
		resetIdentifierHandler: state => {
			return (state = null);
		},
	},
});

export const { setIdentifierHandler, resetIdentifierHandler } =
	identifier.actions;

export default identifier.reducer;
