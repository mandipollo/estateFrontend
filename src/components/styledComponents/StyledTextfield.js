import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const StyledTextfield = styled(TextField)(
	({ theme, widthvalue, widthValueSm }) => ({
		backgroundColor: "white",
		width: "98%",
		[theme.breakpoints.up("sm")]: {
			width: widthvalue,
		},

		[theme.breakpoints.down("sm")]: {
			width: widthValueSm,
		},
	})
);

export default StyledTextfield;
