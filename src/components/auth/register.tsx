import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { Grid, Paper, TextField, Button } from '@material-ui/core'
import { registerSuccess } from '../../redux/auth/actionCreator';
import { RootState } from '../../redux/store';
import { Redirect } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

    const handleRegister = () => {
        dispatch(registerSuccess({ email, password }))
    }
    const paperStyle = { padding: 20, width: 300, margin: "0 auto", marginTop: 20 }
    const headerStyle = { margin: 0 }
    const marginTopSmall = { marginTop: 10 }

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }
    return (
        <Grid>
            <Paper style={paperStyle} elevation={10}>
                <Grid>
                    <h2 style={headerStyle}>Sign Up</h2>
                </Grid>
                <form>

                    <TextField fullWidth label='Email' placeholder="Enter your email"
                        name={email}
                        value={email}
                        onChange={e => setEmail(e.target.value)} />

                    <TextField fullWidth label='Password' placeholder="Enter your password"
                        name={password}
                        value={password}
                        onChange={e => setPassword(e.target.value)} />

                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" />

                    <Button type='submit' variant='contained' color='primary' style={marginTopSmall} fullWidth onClick={handleRegister}>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Register;