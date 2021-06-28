import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import { Redirect } from "react-router-dom";

import { RootState } from '../../redux/store';
import { loginSuccess } from '../../redux/auth/actionCreator';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

    const dispatch = useDispatch()

    const paperStyle = { padding: 20, width: 300, margin: "0 auto", marginTop: 20 }
    const btnstyle = { margin: '8px 0' }

    const handleLogin = () => {
        dispatch(loginSuccess({ email, password }))
    }
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Email' placeholder='Enter email' fullWidth required
                    name={email}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required
                    name={password}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button
                    type='submit'
                    color='primary'
                    variant="contained"
                    style={btnstyle} fullWidth
                    onClick={handleLogin}>Sign in</Button>
            </Paper>
        </Grid>
    )
}

export default Login