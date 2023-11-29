import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const StyledTextfield = styled(TextField)(({ theme, widthvalue }) => ({
	backgroundColor: "white",
	width: "98%",
	[theme.breakpoints.up("sm")]: {
		width: widthvalue,
	},
}));

export default StyledTextfield;
