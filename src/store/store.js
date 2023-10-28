import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import searchInputReducer from "./searchInput";
import identifierReducer from "./identifier";

const rootReducer = combineReducers({
	searchInput: searchInputReducer,
	identifier: identifierReducer,
});
const config = {
	key: "root",
	storage,
};

const reducer = persistReducer(config, rootReducer);
const store = configureStore({
	reducer: reducer,
	middleware: [thunk],
});

export default store;