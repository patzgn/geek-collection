import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const pages = ['Games', 'About'];
const settings = ['Profile'];

export default function Header({ auth }) {

    const [anchorElementNav, setAnchorElementNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElementNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElementNav(null);
    };

    return (
        <AppBar
            position="relative"
            sx={{ backgroundColor: 'white' }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Audiowide',
                            fontWeight: 600,
                            letterSpacing: '.1rem',
                            color: '#0B3B55',
                            textDecoration: 'none',
                        }}
                    >
                        GeekCollection
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <SwipeableDrawer
                            anchor='top'
                            open={Boolean(anchorElementNav)}
                            onClose={handleCloseNavMenu}
                            onOpen={handleOpenNavMenu}
                        >
                            {pages.map((page) => (
                                <ListItem key={page} onClick={handleCloseNavMenu} disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary={page} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                            {auth && settings.map((setting) => (
                                <ListItem key={setting} onClick={handleCloseNavMenu} disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary={setting} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </SwipeableDrawer>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Audiowide',
                            fontWeight: 600,
                            letterSpacing: '.1rem',
                            color: '#0B3B55',
                            textDecoration: 'none',
                        }}
                    >
                        GeekCollection
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                        {auth && settings.map((setting) => (
                            <Button
                                key={setting}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'block' }}
                            >
                                {setting}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {!auth && (
                            <Button
                                variant='contained'
                                size='medium'
                                key="signIn"
                                sx={{
                                    my: 2,
                                    display: 'block'
                                }}
                            >
                                Sign in
                            </Button>
                        )}
                        {auth && (
                            <Button
                                variant='outlined'
                                size='medium'
                                key="logOut"
                                sx={{
                                    my: 2,
                                    display: 'block',
                                }}
                            >
                                Log out
                            </Button>
                        )}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )

}
