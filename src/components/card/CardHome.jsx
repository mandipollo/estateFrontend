import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const CardHome = ({ image, title, description, buttonText }) => {
	return (
		<Card
			sx={{
				height: 420,
				width: 350,
				borderRadius: 2,
				display: "flex",
				m: 2,
				flexDirection: "column",
				transition: "box-shadow 0.3s ease",
				"&:hover": {
					boxShadow: "0px 2px 6px grey",
				},
			}}
		>
			<CardMedia
				sx={{ backgroundSize: "cover" }}
				height="200"
				component="img"
				image={image}
			></CardMedia>
			<CardContent>
				<Typography sx={{ margin: "8px 5px" }} variant="h6">
					{title}
				</Typography>
				<Typography
					sx={{ margin: "8px 5px", color: "#6B728E" }}
					variant="body1"
				>
					{description}
				</Typography>
			</CardContent>
			<CardActions
				sx={{
					flex: 1,
					display: "flex",
					justifyContent: "flex-start",
					alignItems: "flex-end",
				}}
			>
				<Button
					sx={{ color: "#35A29F" }}
					disableRipple
					variant="contained"
					endIcon={<SendIcon />}
				>
					{buttonText}
				</Button>
			</CardActions>
		</Card>
	);
};

export default CardHome;
