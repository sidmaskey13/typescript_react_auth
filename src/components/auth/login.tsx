import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import { Redirect } from "react-router-dom";

import { RootState } from '../../redux/store';
import { loginSuccess } from '../../redux/auth/actionCreator';
import { toast } from 'react-toastify';

interface regdata {
    email?: string,
    password?: string,
}

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<regdata>({})


    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

    const dispatch = useDispatch()

    const paperStyle = { padding: 20, width: 300, margin: "0 auto", marginTop: 20 }
    const btnstyle = { margin: '8px 0' }

    const handleLogin = (e: React.ChangeEvent<any>) => {
        if (validateData(email, password)) {
            dispatch(loginSuccess({ email, password }))
        } else {
            toast.error('Login Crendentials failed')
        }
    }

    function validateData(email: string, password: string): boolean {
        let errorTemp: regdata = {};
        let isValid = true;
        if (!email) {
            isValid = false;
            errorTemp.email = "Please enter your email Address.";
        }
        if (!password) {
            isValid = false;
            errorTemp.password = "Please enter your password.";
        }
        setErrors(errorTemp)
        return isValid;
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
                    error={errors.email ? true : false}
                    helperText={errors.email ? errors.email : ""}
                />
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required
                    name={password}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    error={errors.password ? true : false}
                    helperText={errors.password ? errors.password : ""}
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