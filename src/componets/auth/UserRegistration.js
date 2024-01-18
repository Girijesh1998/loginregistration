import { TextField,Alert, Button, Box, Checkbox } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom'
import { useState } from "react";


const UserRegistration = () => {

    const [error, setError] = useState({
        status: false,
        type: ''
      })
    
    const navigate = useNavigate();
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
          email: data.get('email'),
          password: data.get('password'),
          password_confirmation: data.get('password_confirmation'),
          tc:data.get('tc'),
         
          
        }
        console.log(actualData)
        if ( actualData.email && actualData.password && actualData.password_confirmation && actualData.tc !== null) {
            if(actualData.password === actualData.password_confirmation){
                console.log(actualData);
                document.getElementById("registration-form").reset()
                setError({status : true , msg : "Login Success", type : "success" })
                navigate('/dashboard')
            }else{
                setError({status : true, msg : "No match password" , type : "error" })
            }
        
        }
        else {
          setError({status : true, msg : "All Fields are Required" , type : "error" })
        }
      }
    
    return (
        <div>
            <Box component='form' noValidate sx={{ mt: 1 }} id="registration-form" onSubmit={handleSubmit}>
                <TextField required fullWidth margin="normal" id="name" name="email" label='Name' />
                <TextField required fullWidth margin="normal" id="email" name="email" label='Email Address' />
                <TextField required fullWidth margin="normal" id="password" name="password" label='Password' type="password" />
                <TextField required fullWidth margin="normal" id="password_confirmation" name="password_confirmation" label='Confirm Password' type="password" />
                <FormControlLabel control={<Checkbox value='agree' color="primary" name="tc" id="tc" />} label="I agree to tearm andcondition"/>
                    <Box textAlign='center'>
                        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>
                    </Box>
                    {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
            </Box>
        </div>
    );
}

export default UserRegistration;
