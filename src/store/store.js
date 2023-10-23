import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchInputReducer from "./searchInput";
import identifierReducer from "./identifier";

const rootReducer = combineReducers({
	searchInput: searchInputReducer,
	identifier: identifierReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
