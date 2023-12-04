import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchForSale = createAsyncThunk(
	"forSale/fetchForSale",
	async params => {
		try {
			const response = await axios.get(
				"https://us-central1-estate-2aef8.cloudfunctions.net/forSale",
				{
					params,
				}
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
);
const forSaleSlice = createSlice({
	name: "forSale",
	initialState: {
		data: [],
		status: "idle",
		error: null,
	},
	reducers: {
		setForSale: (state, action) => {
			state.data = action.payload;
		},
		resetStatus: (state, action) => {
			state.status = "idle";
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchForSale.pending, state => {
				state.status = "loading";
			})
			.addCase(fetchForSale.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
				state.error = null;
			})
			.addCase(fetchForSale.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export const { setForSale, resetStatus } = forSaleSlice.actions;

export default forSaleSlice.reducer;
