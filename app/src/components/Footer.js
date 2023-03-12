import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export default function Footer() {

  const theme = useTheme();

  return (
    <Box
      component='footer'
      sx={{
        display: 'flex',
        overflow: 'hidden',
        marginTop: 'auto',
        bgcolor: `${theme.palette.primary.dark}`
      }}
    >
      <Container sx={{ my: 8, display: 'flex', justifyContent: 'center' }}>
        <Typography
          component='h1'
          variant='h3'
          color='white'
          fontFamily='Audiowide'
        >
          GeekCollection
        </Typography>
      </Container>
    </Box>
  );

}
