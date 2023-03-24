import React from 'react';

import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

export default function GameListItem({ game }) {

  return (
    <ListItem>
      <ListItemButton alignItems='flex-start' component="a" href={`/games/${game.id}`}>
        <ListItemAvatar sx={{ width: 120 }}>
          <Avatar
            alt={game.title}
            src={`../images/${game.poster}`}
            variant='rounded'
            sx={{ width: 100, height: 'auto' }}
          />
        </ListItemAvatar>

        <ListItemText
          primary={`${game.title} (${game.platforms.map(i => `${i}`).join(', ')})`}
          secondary={game.shortDescription}
        />
      </ListItemButton>
    </ListItem>
  )

}
