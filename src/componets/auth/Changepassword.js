import { Grid,TextField,Box,Button,Alert } from '@mui/material';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import React from 'react'

const Changepassword = () => {
    const navigate = useNavigate()

    const [error, setError] = useState({
        status: false,
        type: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            password: data.get('password'),
            password_confirmation: data.get('password_confirmation'),
        }
        console.log(actualData)
        if (actualData.password && actualData.password_confirmation !==null) {
            if(actualData.password === actualData.password_confirmation){
                console.log(actualData);
            document.getElementById("password-reset-email-form").reset()
            setError({ status: true, msg: "Password Reset Successfully. Redirecting to Login Page...", type: "success" })
            setTimeout(()=>{
                navigate("/login")
            }, 3000)    
            }else{
                setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: "error" })
            }
         
        }
        else {
            setError({ status: true, msg: "All Fields Are Required !", type: "error" })
        }
    }

    return (
        <div>
            <Grid container justifyContent={'center'}>
                <Grid item sm={8} xs={12}>
                <h1> Change Password</h1>
                    <Box component='form' noValidate sx={{ mt: 1 }} id="password-reset-email-form" onSubmit={handleSubmit}>
                    <TextField required fullWidth margin="normal" id="password" name="password" label='New Password' type="password" />
                    <TextField required fullWidth margin="normal" id="password_confirmation" name="password_confirmation" label='New Confirm Password' type="password" />
                        <Box textAlign='center'>
                            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}>Submit</Button>
                        </Box>
                        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Changepassword
