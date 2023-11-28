import { Box } from "@mui/material";
import styled from "@emotion/styled";

const StyledBox = styled(Box)(
	({
		theme,
		propsm,
		propmd,
		propflex,
		flexdirection,
		width,
		alignposition,
		gap,
	}) => ({
		[theme.breakpoints.up("md")]: {
			display: propmd,
		},
		[theme.breakpoints.down("md")]: {
			display: propsm,
		},
		flex: propflex,
		justifyContent: "center",
		display: "flex",
	})
);

export default StyledBox;
