import { createSlice } from "@reduxjs/toolkit";

const savedPropSlice = createSlice({
	name: "savedUserProperty",
	initialState: null,
	reducers: {
		setSavedUserProperty: (state, action) => {
			return (state = action.payload);
		},
	},
});

export const { setSavedUserProperty } = savedPropSlice.actions;
export default savedPropSlice.reducer;
