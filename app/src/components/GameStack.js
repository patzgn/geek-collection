import React from "react";

import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import GameCard from "./GameCard";
import games from "../fake_data/games"


export default function GameStack() {
    return (
        <Box
            component="section"
            sx={{ display: 'flex', overflow: 'hidden' }}
        >
            <Container
                sx={{ mt: 10, mb: 10 }}
            >
                <Grid container spacing={2}>
                    {games.map(game => <GameCard key={game.id} game={game} />)}
                </Grid>
            </Container>
        </Box>
    );
}
