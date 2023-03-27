import React, { useState } from "react";

import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { Link } from "react-router-dom"
import { loginUser } from "../services/users";

export default function Login(props) {

    const theme = useTheme();

    const { setToken } = props;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        console.log(token);
        setToken(token);
    }

    return (
        <>
            <Container maxWidth='xs' sx={{ mt: 10, mb: 10 }}>
                <Box
                    component="form"
                    sx={{
                        display: "flex",
                        flexDirection: 'column',
                        '& > div, button': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >

                    <Typography
                        component='h1'
                        variant='h6'
                        color='text.primary'
                        fontFamily='Audiowide'
                        align="center"
                        gutterBottom
                    >
                        LOG IN TO GEEKCOLLECTION
                    </Typography>

                    <TextField
                        id="username-input"
                        label="Username"
                        onChange={e => setUsername(e.target.value)}
                    />

                    <TextField
                        id="password-input"
                        label="Password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />

                    <Button
                        variant='contained'
                        size='large'
                        type="submit"
                    >
                        Log In
                    </Button>

                    <Typography
                        component='p'
                        variant='caption'
                        color='text.secondary'
                        align="center"
                        gutterBottom
                    >
                        Not a member?
                        <Link
                            style={{
                                textDecoration: "none",
                                color: theme.palette.text.secondary,
                            }}
                            to={``}
                        >
                            Create an account

                        </Link>

                    </Typography>

                </Box>
            </Container>
        </>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};
