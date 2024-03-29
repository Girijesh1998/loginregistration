import {Grid, TextField, Button, Box, Alert } from '@mui/material';
import React, { useState } from 'react'

const SendPasswordReset = () => {
    const [error, setError] = useState({
        status: false,
        type: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
        }
        console.log(actualData)
        if (actualData.email) {
            console.log(actualData);
            document.getElementById("passwordreset-form").reset()
            setError({ status: true, msg: "Password Reset Email Sent. Check Your Email !!", type: "success" })
        }
        else {
            setError({ status: true, msg: "Please Provide Valid Email", type: "error" })
        }
    }

    return (
        <div>
            <Grid container justifyContent={'center'}>
                <Grid item sm={6} xs={12}>
                    <Box component='form' noValidate sx={{ mt: 1 }} id="passwordreset-form" onSubmit={handleSubmit}>
                        <TextField required fullWidth margin="normal" id="email" name="email" label='Email Address' />
                        <Box textAlign='center'>
                            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}>Send</Button>
                        </Box>
                        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default SendPasswordReset;
