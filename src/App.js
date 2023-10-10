import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, Theme } from "@emotion/react";
import theme from "./theme";
import Homepage from "./components/Homepage";
import Root from "./pages/Root";

const route = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <Homepage />,
			},
		],
	},
]);
const App = () => {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<RouterProvider router={route}></RouterProvider>
			</ThemeProvider>
		</div>
	);
};

export default App;
