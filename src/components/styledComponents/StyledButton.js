import styled from "@emotion/styled";
import theme from "../../theme";

import { Button } from "@mui/material";

const StyledButton = styled(Button)(props => ({
	margin: 10,
	textTransform: "none",
	borderRadius: "0.5rem",
	variant: props.variant,
	":hover": {
		textDecoration: "underline",
		textDecorationThickness: "2px",
		textDecorationColor: theme.palette.hover.secondary,
		backgroundColor: theme.palette.hover.main,
		textUnderlineOffset: "2px",
	},
}));

export default StyledButton;
