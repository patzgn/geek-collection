import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import GameCard from './GameCard';
import { ErrorAlert } from '../services/notification';
import { getRecentlyGames } from '../services/games';


export default function GameStack() {

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState("");

  const fetchGames = () => {
    setLoading(true);
    getRecentlyGames().then(res => {
      setGames(res.data.content)
    }).catch(err => {
      setError(err.response.data.message)
    }).finally(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchGames();
  }, [])

  if (loading) {
    return (
      <Box
        component='section'
        sx={{ display: 'flex', overflow: 'hidden' }}
      >
        <Container sx={{ mt: 10, mb: 10 }}>
          <CircularProgress />
        </Container>
      </Box>
    )
  }

  if (err) {
    return (
      <Box
        component='section'
        sx={{ display: 'flex', overflow: 'hidden', justifyContent: 'center', mt: 10, mb: 10 }}
      >
        <ErrorAlert message={err} />
      </Box>
    )
  }

  return (
    <Box
      component='section'
      sx={{ display: 'flex', overflow: 'hidden' }}
    >
      <Container sx={{ mt: 10, mb: 10 }}>
        <Grid container spacing={2}>
          {games.map(game => <GameCard key={game.id} game={game} />)}
        </Grid>
      </Container>
    </Box>
  );

}
