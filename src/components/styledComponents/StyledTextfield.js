import React from "react";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const StyledTextfield = styled(TextField)(({ theme }) => ({
	backgroundColor: "white",
	[theme.breakpoints.down("sm")]: {
		width: "90%",
	},
	[theme.breakpoints.up("sm")]: {
		width: 550,
	},
	borderRadius: 2,
	margin: 1,
}));

export default StyledTextfield;
