import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardProduct = () => {
	return (
		<Card sx={{ width: "90%" }}>
			<CardActionArea
				disableRipple
				sx={{ display: "flex", flexDirection: "row" }}
			>
				<CardMedia
					component="img"
					height="200"
					image="https://plus.unsplash.com/premium_photo-1669261232192-6c625a80375e?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVwdGlsZXxlbnwwfHwwfHx8MA%3D%3D"
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Lizard
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default CardProduct;
