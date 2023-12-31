import { createSlice } from "@reduxjs/toolkit";

const searchInputSlice = createSlice({
	name: "searchInput",
	initialState: null,
	reducers: {
		setSearchInputHandler: (state, action) => {
			return (state = action.payload);
		},
		resetSearchInputHandler: state => {
			return (state = null);
		},
	},
});

export const { setSearchInputHandler, resetSearchInputHandler } =
	searchInputSlice.actions;
export default searchInputSlice.reducer;
