import styled from "@emotion/styled";
import { List } from "@mui/material";

const StyledListFooter = styled(List)(props => ({
	display: "flex",
	flexDirection: "column",
	borderLeft: "0.1px solid rgba(71, 78, 104, 0.5)",
}));

export default StyledListFooter;
