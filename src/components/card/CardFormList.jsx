import React, { useState, useEffect } from "react";
import {
	Box,
	Typography,
	Button,
	Backdrop,
	Paper,
	IconButton,
} from "@mui/material";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import StyledTextfield from "../styledComponents/StyledTextfield";
import StyledBox from "../styledComponents/StyledBox";
import StyledButton from "../styledComponents/StyledButton";
const CardFormList = ({
	list,
	setList,
	listHandler,
	open,
	handleClose,
	createListHandler,
}) => {
	// disable scroll when overlay is open

	useEffect(() => {
		if (open) {
			const bodyOverflowOrginal = document.body.style.overflow;

			document.body.style.overflow = "hidden";

			return () => {
				document.body.style.overflow = bodyOverflowOrginal;
			};
		}
	}, [open]);
	return (
		<Box>
			<Backdrop
				sx={{ color: "#fff", zIndex: 100 }}
				open={open}
				onClick={handleClose}
			>
				<Paper
					onSubmit={createListHandler}
					onClick={e => e.stopPropagation()}
					sx={{
						display: "flex",
						width: 420,
						height: 280,

						position: "fixed",
						borderRadius: "0.5em",
						zIndex: 999,
					}}
					component="form"
				>
					<Box
						flex={1}
						m={2}
						sx={{
							display: "flex",
							flexDirection: "column",
						}}
					>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								borderBottom: "0.1px solid rgba(71, 78, 104, 0.5)",
								marginBottom: 4,
							}}
							flex={1}
						>
							<Typography fontFamily="ubuntu" variant="h5">
								Create a new list
							</Typography>
							<IconButton onClick={handleClose}>
								<CloseOutlinedIcon />
							</IconButton>
						</Box>
						<StyledBox flex={1} flexDirection="column">
							<Typography variant="body2">Name</Typography>
							<StyledTextfield
								value={list}
								onChange={listHandler}
							></StyledTextfield>
						</StyledBox>
						<Box
							sx={{ display: "flex", justifyContent: "space-around" }}
							flex={1}
						>
							<Button
								size="large"
								sx={{ textTransform: "none" }}
								onClick={handleClose}
							>
								<Typography variant="body1">Cancel</Typography>
							</Button>
							<StyledButton
								onClick={createListHandler}
								disabled={list ? false : true}
								size="large"
								sx={{ textTransform: "none", backgroundColor: "#01DEB6" }}
							>
								<Typography variant="body1">Create</Typography>
							</StyledButton>
						</Box>
					</Box>
				</Paper>
			</Backdrop>
		</Box>
	);
};

export default CardFormList;
