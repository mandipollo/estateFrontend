import React, { useState } from "react";
import { Grid, CardContent, Typography, Card } from "@mui/material";
import StyledButton from "../styledComponents/StyledButton";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CardFormList from "../card/CardFormList";
import { auth, database } from "../../firebase.config";

import { update, ref, push, child } from "firebase/database";

const CollectionList = () => {
	const uid = auth ? auth.currentUser.uid : null;
	const [open, setOpen] = useState(false);
	const [list, setList] = useState();

	const listHandler = event => {
		setList(event.target.value);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};
	const createListHandler = async () => {
		if (uid)
			try {
				const newListKey = push(child(ref(database), ` ${list}`)).key;
				await update(ref(database, `users/${uid}/propertyList/${newListKey}`), {
					title: list,
				});
				handleClose();
			} catch (error) {
				console.log(error);
			}
	};
	return (
		<Grid item>
			<Card elevation={7}>
				<CardContent sx={{ margin: 2 }}>
					<Typography variant="h6">Feature coming soon.</Typography>
				</CardContent>
				<CardContent
					sx={{
						backgroundColor: "#F2F1EB",
						margin: 2,
						borderRadius: "0.5em",
						justifyContent: "center",
						alignItems: "center",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<img
						src="https://www.svgrepo.com/show/489643/list-list.svg"
						width="164"
						height="164"
						viewBox="0 0 64 64"
					/>
					<Typography fontFamily="ubuntu" variant="h6">
						You don't have any lists yet
					</Typography>
					<Typography fontFamily="ubuntu" variant="h6">
						Organise your saved properties into lists
					</Typography>

					<StyledButton
						onClick={handleOpen}
						disabled
						startIcon={<AddOutlinedIcon />}
						size="large"
						sx={{ backgroundColor: "#01DEB6" }}
					>
						<Typography fontFamily="ubuntu">Create list</Typography>
					</StyledButton>
				</CardContent>
			</Card>
			<CardFormList
				open={open}
				list={list}
				setList={setList}
				listHandler={listHandler}
				handleClose={handleClose}
				createListHandler={createListHandler}
			/>
		</Grid>
	);
};

export default CollectionList;
