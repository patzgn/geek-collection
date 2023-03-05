import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Hero({ auth }) {
    return (
        <Box
            sx={{
                bgcolor: 'grey.100',
                py: 8,
            }}
        >
            <Container maxWidth="md">
                <Typography
                    component="h1"
                    variant='h3'
                    color="text.primary"
                    fontFamily="Audiowide"
                    gutterBottom
                >
                    GeekCollection
                </Typography>

                <Typography
                    component="h2"
                    variant="h4"
                    color="text.secondary"
                >
                    Track your geek collection
                </Typography>

                <Typography
                    variant='h6'
                    color="text.secondary"
                >
                    <ul>
                        <li>Catalog your games and books collection</li>
                        <li>Create wishlists</li>
                        <li>Take part in reading challenge</li>
                        <li>Check most popular games and books among users</li>
                    </ul>
                </Typography>

                <Stack
                    direction="row"
                    spacing={2}
                >
                    {!auth && (
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                ml: 4,
                                fontSize: '20px',
                            }}
                        >
                            Sign In
                        </Button>
                    )}
                    {auth &&
                        <>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    ml: 4,
                                    fontSize: '20px',
                                }}
                            >
                                My Profile
                            </Button>
                            <Button variant='outlined'>Log out</Button>
                        </>
                    }
                </Stack>

            </Container>
        </Box >
    )
}