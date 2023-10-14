import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	IconButton,
} from "@mui/material";

const CardHome = ({ image, title, description, action, icon }) => {
	return (
		<Card sx={{ height: 450, width: 350, borderRadius: 2 }}>
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
				<Typography sx={{ margin: "8px 5pxs", color: "grey" }} variant="body1">
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<IconButton onClick={action}>{icon}</IconButton>
			</CardActions>
		</Card>
	);
};

export default CardHome;
