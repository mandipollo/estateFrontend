import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const StyledTextfield = styled(TextField)(({ theme }) => ({
	backgroundColor: "white",
	width: "98%",
	[theme.breakpoints.up("sm")]: {
		width: 550,
	},
}));

export default StyledTextfield;
