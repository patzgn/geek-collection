import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
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
      setError(err.message)
    }).finally(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchGames();
  }, [])

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    )
  }

  if (err) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ErrorAlert />
      </Box>
    )
  }

  return (
    <Grid container spacing={2}>
      {games.map(game => <GameCard key={game.id} game={game} />)}
    </Grid>
  );

}
