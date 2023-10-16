import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchInputReducer from "./searchInput";

const rootReducer = combineReducers({
	searchInputReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
