import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { Grid, Paper, TextField, Button, FormHelperText } from '@material-ui/core'
import { registerSuccess } from '../../redux/auth/actionCreator';
import { RootState } from '../../redux/store';
import { Redirect } from "react-router-dom";
import { toast } from 'react-toastify';

interface regdata {
    email?: string,
    password?: string,
    cPassword?: string
}

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const [registerDone, setRegisterDone] = useState(false)
    const [errors, setErrors] = useState<regdata>({})

    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

    const paperStyle = { padding: 20, width: 300, margin: "0 auto", marginTop: 20 }
    const headerStyle = { margin: 0 }
    const marginTopSmall = { marginTop: 10 }
    const errorStyle = { color: "red" }

    const handleRegister = (e: React.ChangeEvent<any>) => {
        e.preventDefault()
        if (validateData(email, password, cPassword)) {
            dispatch(registerSuccess({ email, password }))
            setRegisterDone(true)
        }
        else {
            toast.error('Register Input Validation failed')
        }

    }

    function validateData(email: string, password: string, cPassword: string): boolean {
        let errorTemp: regdata = {};
        let isValid = true;
        if (!email) {
            isValid = false;
            errorTemp.email = "Please enter your email Address.";
        }
        if (!password) {
            isValid = false;
            errorTemp.password = "Please enter your password.";
        } else {
            var pattern = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i)
            if (!pattern.test(password)) {
                isValid = false;
                errorTemp.password = "Password must be at least 8 characters long and include at least a number and an alphabet";
            }
        }
        if (!cPassword) {
            isValid = false;
            errorTemp.cPassword = "Please enter confirm password.";
        }

        if (typeof email !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(email)) {
                isValid = false;
                errorTemp.email = "Please enter valid email address.";
            }
        }
        if (password !== cPassword) {
            isValid = false;
            errorTemp.cPassword = "Confirm password and Password are not same.";
        }
        setErrors(errorTemp)
        return isValid;
    }

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }
    if (registerDone) {
        return <Redirect to="/login" />
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
                    <FormHelperText style={errorStyle}>{errors.email ? errors.email : ""}</FormHelperText>

                    <TextField fullWidth label='Password' placeholder="Enter your password"
                        name={password}
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                    <FormHelperText style={errorStyle}>{errors.password ? errors.password : ""}</FormHelperText>


                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"
                        name={cPassword}
                        value={cPassword}
                        onChange={e => setCPassword(e.target.value)} />
                    <FormHelperText style={errorStyle}>{errors.cPassword ? errors.cPassword : ""}</FormHelperText>


                    <Button type='submit' variant='contained' color='primary' style={marginTopSmall} fullWidth onClick={handleRegister}>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Register;