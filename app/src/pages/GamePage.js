import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import CircularProgress from "@mui/material/CircularProgress";

import { getGameById } from "../services/games";
import { ErrorAlert } from "../services/notification";
import GameDetails from "../components/GameDetails";

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
      setError(err.message)
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
      <Container sx={{ mt: 10, mb: 10 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      </Container>
    )
  }

  if (err) {
    return (
      <Container sx={{ mt: 10, mb: 10 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <ErrorAlert />
        </Box>
      </Container>
    )
  }

  return (
    <>
      <Container sx={{ mt: 10, mb: 10 }}>
        <GameDetails game={game} auth={auth} />
      </Container>
    </>
  );
}
