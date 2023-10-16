import { Box } from "@mui/material";
import styled from "@emotion/styled";

const StyledBox = styled(Box)(({ theme, propsm, propmd, propflex }) => ({
	[theme.breakpoints.up("md")]: {
		display: propmd,
	},
	[theme.breakpoints.down("md")]: {
		display: propsm,
	},
	flex: propflex,
	justifyContent: "center",
}));

export default StyledBox;
