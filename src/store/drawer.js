import { createSlice } from "@reduxjs/toolkit";

const drawer = createSlice({
	name: "drawer",
	initialState: false,
	reducers: {
		openDrawer: state => {
			return (state = true);
		},
		closeDrawer: state => {
			return (state = false);
		},
	},
});

export const { openDrawer, closeDrawer } = drawer.actions;
export default drawer.reducer;
