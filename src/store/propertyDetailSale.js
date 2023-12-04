import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchPropertyDetailSale = createAsyncThunk(
	"propertyDetailSale/fetchPropertyDetail",
	async ({ id }) => {
		try {
			const response = await axios.get(
				"https://us-central1-estate-2aef8.cloudfunctions.net/forSaleDetail",
				{
					params: {
						id,
					},
				}
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
);

const propertyDetailSale = createSlice({
	name: "propertyDetailSale",
	initialState: {
		status: "idle",
		data: "",
		error: null,
	},
	reducers: {
		setPropertyDetailSale: (state, action) => {
			state.data = action.payload;
		},
		resetPropertyDetailSale: state => {
			state.data = "";
		},
	},
});

export default propertyDetailSale;
