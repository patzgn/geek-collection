import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function GameCard({ game }) {
    return (
        <Grid item xs={12} sm={12 / 5} >
            <Card sx={{ height: "100%" }}>
                <CardActionArea component="a" href="#" sx={{ height: "100%" }}>
                    <CardMedia
                        component="img"
                        height="240"
                        image={`./images/${game.poster}`}
                        alt={game.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" >
                            {game.title}
                        </Typography>
                        < Typography variant="body2" color="text.secondary" >
                            {game.shortDescription}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}
