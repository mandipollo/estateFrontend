import { createSlice } from "@reduxjs/toolkit";

const filterParams = createSlice({
	name: "filterParams",
	initialState: {
		radius: "0.0",
		minPrice: "",
		maxPrice: "",
		minBedrooms: "",
		maxBedrooms: "",
		propertyType: "any",
		addedToSite: "",
	},
	reducers: {
		setFilterParams: (state, action) => {
			return action.payload;
		},

		removeFilterParams: state => {
			state = "";
		},
	},
});

export const { setFilterParams, removeFilterParams } = filterParams.actions;
export default filterParams.reducer;
