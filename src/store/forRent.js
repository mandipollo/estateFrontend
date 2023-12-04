import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchForRent = createAsyncThunk(
	"forRent/fetchForRent",
	async params => {
		try {
			const response = await axios.get(
				"https://us-central1-estate-2aef8.cloudfunctions.net/forRent",
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
const forRentSlice = createSlice({
	name: "forRent",
	initialState: {
		data: [],
		status: "idle",
		error: null,
	},
	reducers: {
		setForRent: (state, action) => {
			state.data = action.payload;
		},
		resetStatus: (state, action) => {
			state.status = "idle";
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchForRent.pending, state => {
				state.status = "loading";
			})
			.addCase(fetchForRent.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
				state.error = null;
			})
			.addCase(fetchForRent.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export const { setForRent, resetStatus } = forRentSlice.actions;

export default forRentSlice.reducer;
