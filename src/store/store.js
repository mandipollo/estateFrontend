import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchInputReducer from "./searchInput";
import identifierReducer from "./identifier";

const rootReducer = combineReducers({
	searchInputReducer,
	identifierReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
