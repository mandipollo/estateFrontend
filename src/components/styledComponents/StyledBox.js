import { Box } from "@mui/material";
import styled from "@emotion/styled";

const StyledBox = styled(Box)(({ theme, propSm, propMd, propFlex }) => ({
	[theme.breakpoints.up("md")]: {
		display: propMd,
	},
	[theme.breakpoints.down("md")]: {
		display: propSm,
	},
	flex: propFlex,
	justifyContent: "center",
}));

export default StyledBox;
