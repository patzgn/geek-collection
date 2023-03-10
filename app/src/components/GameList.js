import React from 'react';

import Box from '@mui/material/Box';
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import games from '../fake_data/games'
import { Container } from '@mui/system';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function GameItem({ game }) {
    return (
        <ListItem
            alignItems='flex-start'
        >
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar
                        src={`../images/${game.poster}`}
                        variant='rounded'
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

export default function GameList() {
    return (
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
                <List>
                    {games.map((game, i) => (
                        <React.Fragment>
                            <GameItem key={game.id} game={game} />
                            <Divider variant='inset' component='li' />
                        </React.Fragment>
                    ))}
                </List>

                <Stack spacing={2} alignItems='center' >
                    <Pagination count={10} shape='rounded' />
                </Stack>

            </Container>
        </Box>
    );
}