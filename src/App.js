import React from "react";

//route
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Homepage from "./pages/Homepage";
import ForSale from "./pages/ForSalePage";
import Root from "./pages/Root";
import FilterPage from "./pages/FilterPage";

// utilities
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

// state
import { Provider } from "react-redux";
import store from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

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
