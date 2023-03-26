import React from "react"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

import GameStack from "../components/GameStack"
import Hero from "../components/Hero"

export default function Home(props) {

  return (
    <>
      <Hero auth={props.auth} />
      <Box
        component='section'
        sx={{ display: 'flex', overflow: 'hidden' }}
      >
        <Container sx={{ mt: 10, mb: 10 }}>
          <GameStack />
        </Container>
      </Box>
    </>
  )

}
