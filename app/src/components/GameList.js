import React, { useEffect, useState } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import GameListItem from './GameListItem';
import { getGames } from '../services/games';
import { ErrorAlert } from '../services/notification';

export default function GameList(props) {

  const { params } = props;
  const [count, setCount] = useState(0);

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState("");


  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  }

  const fetchGames = (params) => {
    setLoading(true);
    getGames(params).then(res => {
      console.log('fetching')
      setGames(res.data.content)
      setCount(res.data.totalPages)
    }).catch(err => {
      setError(err.response.data.message)
    }).finally(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchGames({
      'page': page - 1,
      'title': params.title,
    });
  }, [params, page])


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
      <List>
        {games.map((game) => (
          <React.Fragment key={game.id}>
            <GameListItem game={game} />
            <Divider variant='inset' component='li' />
          </React.Fragment>
        ))}
      </List>

      <Stack spacing={2} alignItems='center' >
        <Pagination count={count} page={page} onChange={handleChange} shape='rounded' />
      </Stack>
    </>
  );

}
