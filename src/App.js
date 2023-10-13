import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Homepage from "./pages/homepage";
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
