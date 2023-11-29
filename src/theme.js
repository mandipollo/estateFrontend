import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#FFFFF",
		},
		hover: {
			main: "#F2F3F4",
			secondary: "#445D48",
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			mobile: 400,
			sm: 600,
			tablet: 800,
			md: 900,
			laptop: 1024,
			lg: 1244,
			desktop: 1300,
			xl: 1536,
		},
	},
});

export default theme;
