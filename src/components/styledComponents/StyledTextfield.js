import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const StyledTextfield = styled(TextField)(({ theme }) => ({
	backgroundColor: "white",
	width: "98%",
	[theme.breakpoints.up("sm")]: {
		width: 550,
	},
	borderRadius: 2,
	margin: 1,
	"& .MuiInputBase-input": {
		padding: "14px 3px 6px 20px",
	},
}));

export default StyledTextfield;
