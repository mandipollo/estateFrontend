import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const StyledGrid = styled(Grid)(({ theme, points }) => ({
	[theme.breakpoints.down(points)]: {
		display: "none",
	},
	[theme.breakpoints.up(points)]: {
		display: "flex",
	},
}));

export default StyledGrid;

export const StyledGridDrawer = styled(Grid)(({ theme, points }) => ({
	[theme.breakpoints.up(points)]: {
		display: "none",
	},
	[theme.breakpoints.down(points)]: {
		display: "flex",
	},
}));
