import React from "react";
import { useParams } from "react-router-dom";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Profile() {

    const { username } = useParams();

    return (
        <Box sx={{ bgcolor: 'grey.100', py: 8, }}>
            <Container maxWidth='md'>



                <Typography
                    component='h1'
                    variant='h3'
                    color='text.primary'
                    fontFamily='Audiowide'
                    gutterBottom
                >
                    {username}
                </Typography>

                <Typography
                    component='h2'
                    variant='h4'
                    color='text.secondary'
                >

                </Typography>

                <Typography
                    variant='h6'
                    color='text.secondary'
                >

                </Typography>

            </Container>
        </Box >
    )

}