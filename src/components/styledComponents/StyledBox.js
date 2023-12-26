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
		[theme.breakpoints.up("laptop")]: {
			display: propmd,
		},
		[theme.breakpoints.down("laptop")]: {
			display: propsm,
		},
		flex: propflex,
		justifyContent: "center",
		display: "flex",
	})
);

export default StyledBox;
