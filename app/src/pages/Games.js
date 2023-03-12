import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import GameList from "../components/GameList";
import SearchBox from "../components/SearchBox";

export default function Games() {

  const [title, setTitle] = useState("");
  const [params, setParams] = useState({});

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  function handleClickSearch() {
    setParams({
      'page': 0,
      'title': title,
    })
  }

  return (
    <>
      <Box
        component='section'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden',
          paddingY: 10
        }}
      >
        <Container maxWidth='md'>
          <SearchBox handleChangeTitle={handleChangeTitle} handleClickSearch={handleClickSearch} />
          <GameList params={params} />
        </Container>
      </Box>
    </>
  );

}
