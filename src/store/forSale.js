import { createSlice } from "@reduxjs/toolkit";

const forSaleSlice = createSlice({
	name: "forSale",
	initialState: [],
	reducers: {
		setForSale: (state, action) => {
			return action.payload;
		},
	},
});

export const { setForSale } = forSaleSlice.actions;

export default forSaleSlice.reducer;
