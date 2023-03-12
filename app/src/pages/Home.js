import React from "react"

import GameStack from "../components/GameStack"
import Hero from "../components/Hero"

export default function Home(props) {

  return (
    <>
      <Hero auth={props.auth} />
      <GameStack />
    </>
  )

}
