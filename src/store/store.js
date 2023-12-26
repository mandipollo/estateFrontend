import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import searchInputReducer from "./searchInput";
import identifierReducer from "./identifier";
import forSaleReducer from "./forSale";
import filterReducer from "./filterParams";
import rentReducer from "./forRent";
import userReducer from "./user";
import drawerReducer from "./drawer";
import savedPropertyReducer from "./savedPropSlice";

const rootReducer = combineReducers({
	searchInput: searchInputReducer,
	identifier: identifierReducer,
	forSale: forSaleReducer,
	filter: filterReducer,
	forRent: rentReducer,
	user: userReducer,
	drawer: drawerReducer,
	savedUserProperty: savedPropertyReducer,
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
