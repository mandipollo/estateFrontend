import React, { useState } from "react";
import {
	Snackbar,
	IconButton,
	SnackbarContent,
	useMediaQuery,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import theme from "../theme";

const SnackbarNotify = ({ message, open, handleClose }) => {
	const isMobile = useMediaQuery(theme.breakpoints.down("mobile"));
	const action = (
		<>
			<IconButton onClick={handleClose}>
				<CloseOutlinedIcon style={{ color: "white" }} />
			</IconButton>
		</>
	);
	return (
		<Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>
			<SnackbarContent
				action={action}
				sx={{ backgroundColor: "darkgreen" }}
				message={message}
			></SnackbarContent>
		</Snackbar>
	);
};

export default SnackbarNotify;
