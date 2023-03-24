import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid"
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography"

import { getGameById } from "../services/games";
import { ErrorAlert } from "../services/notification";

export default function GamePage({ auth }) {

  const { id } = useParams();

  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState("");

  const fetchGame = (id) => {
    setLoading(true);
    getGameById(id).then(res => {
      setGame(res.data)
    }).catch(err => {
      setError(err.response.data.message)
    }).finally(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchGame(id);
  }, [id])

  console.log(game)

  if (loading) {
    return (
      <CircularProgress />
    )
  }

  if (err) {
    return (
      <ErrorAlert />
    )
  }

  return (
    <>
      <Container sx={{ mt: 10, mb: 10 }}>
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <Typography
              component='h1'
              variant='h4'
              color='text.primary'
              fontWeight={600}
              align="center"
            >
              {game.title}
            </Typography>
          </Grid>

          <Grid item xs={2} >
            <Paper sx={{ minWidth: '100%' }}>
              <Avatar
                alt={game.title}
                src={`../images/${game.poster}`}
                variant='rounded'
                sx={{ width: '100%', height: 'auto' }}
              />
            </Paper>
          </Grid>

          <Grid item xs={10} >
            <Paper sx={{ minHeight: '100%' }}>
              <Typography variant='body1' sx={{ p: 2 }} >
                {game.description}
              </Typography>

              <Typography variant='body2' sx={{ px: 2 }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li>Release date: {game.releaseDate}</li>
                  <li>Platform: {game.platforms}</li>
                  <li>Genre: {game.genres}</li>
                </ul>
              </Typography>

              {!auth && (
                <>
                  <Typography variant='body1' align="right" sx={{ p: 2 }} >
                    Want to add this game to your list?
                  </Typography>
                  <Box display="flex" justifyContent="flex-end" mx={2} mb={2}>

                    <Button
                      variant='contained'
                      size='medium'
                      align='right'
                    >
                      Sign In
                    </Button>

                  </Box>
                </>
              )}

            </Paper>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}
