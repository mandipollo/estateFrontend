import React from "react";
import { auth } from "./firebase.config";
//route
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Homepage from "./pages/homepage";
import ForSale from "./pages/ForSalePage";
import Root from "./pages/Root";
import FilterPage from "./pages/FilterPage";
import MyEstatePage from "./pages/MyEstatePage";
import ToRentPage from "./pages/ToRentPage";
import FilterRentPage from "./pages/FilterRentPage";
import PropertyToRent from "./pages/PropertyToRent";
import PropertyDetailRent from "./pages/PropertyDetailRent";
import PropertyForSale from "./pages/PropertyForSale";
import PropertyDetail from "./pages/PropertyDetail";

// utilities
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

// state
import { Provider } from "react-redux";
import store from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import ProtectRoute from "./components/utilities/ProtectRoute";

let persistor = persistStore(store);
const route = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <Homepage />,
			},
			{ path: "forSale", element: <ForSale /> },
			{ path: "filter", element: <FilterPage /> },
			{ path: "filterRent", element: <FilterRentPage /> },
			{
				path: "propertyForSale",
				element: <PropertyForSale />,
			},
			{ path: "propertyToRent", element: <PropertyToRent /> },
			{
				path: "propertyDetail/:propertyId",
				element: <PropertyDetail />,
			},
			{
				path: "propertyDetailRent/:propertyId",
				element: <PropertyDetailRent />,
			},

			{
				path: "toRent",
				element: <ToRentPage />,
			},
			{
				path: "myEstate",
				element: (
					<ProtectRoute>
						<MyEstatePage />
					</ProtectRoute>
				),
			},
		],
	},
]);
const App = () => {
	return (
		<div>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ThemeProvider theme={theme}>
						<RouterProvider router={route}></RouterProvider>
					</ThemeProvider>
				</PersistGate>
			</Provider>
		</div>
	);
};

export default App;
