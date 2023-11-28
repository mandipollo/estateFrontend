import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const StyledGrid = styled(Grid)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		display: "none",
	},
	[theme.breakpoints.up("md")]: {
		display: "flex",
	},
}));

export default StyledGrid;
