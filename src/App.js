import React from "react";

//route
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Homepage from "./pages/Homepage";
import ForSale from "./pages/ForSalePage";
import Root from "./pages/Root";

// utilities
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

// state
import { Provider } from "react-redux";
import store from "./components/store/store";

const route = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <Homepage />,
			},
			{ path: "/forSale", element: <ForSale /> },
		],
	},
]);
const App = () => {
	return (
		<div>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<RouterProvider router={route}></RouterProvider>
				</ThemeProvider>
			</Provider>
		</div>
	);
};

export default App;
