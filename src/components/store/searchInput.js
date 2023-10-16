import { createSlice } from "@reduxjs/toolkit";

const searchInputSlice = createSlice({
	name: "searchInput",
	initialState: null,
	reducers: {
		setSearchInputHandler: (state, action) => {
			return (state = action.payload);
		},
	},
});

export const { setSearchInputHandler } = searchInputSlice.actions;
export default searchInputSlice.reducer;
