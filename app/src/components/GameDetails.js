import React from "react";

import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography"

export default function GameDetails(props) {

  const { game, auth } = props;


  return (
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
  );
}
