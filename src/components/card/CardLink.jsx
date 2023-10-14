import {
	Card,
	CardMedia,
	CardContent,
	Avatar,
	Typography,
	CardActions,
	Button,
} from "@mui/material";

const CardLink = ({ icon, title, description, link }) => {
	return (
		<Card
			sx={{
				height: 350,
				width: 350,
				border: "none",
				display: "flex",
				m: 2,
				boxShadow: "none",
				flexDirection: "column",
				justifyContent: "center",
				textAlign: "center",
			}}
		>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Avatar
					sx={{ width: 64, height: 64, backgroundSize: "contained" }}
					src={icon}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="64"
						height="64"
						viewBox="0 0 64 64"
					/>
				</Avatar>
				<Typography sx={{ margin: "8px 5px" }} variant="h6">
					{title}
				</Typography>
				<Typography sx={{ margin: "8px 5px" }} variant="body1">
					{description}
				</Typography>
				<CardActions>
					<Button
						sx={{
							textTransform: "none",
							color: "#35A29F",
							"&:hover": {
								textDecoration: "underline",
							},
						}}
						disableRipple
						variant="text"
					>
						{link}
					</Button>
				</CardActions>
			</CardContent>
		</Card>
	);
};

export default CardLink;
