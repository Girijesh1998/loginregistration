import { Button, CssBaseline, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Changepassword from '../auth/Changepassword';

const Dashboard = () => {
const Navigate = useNavigate();

   const handeLogout = () =>{
    console.log('Logout');
    Navigate('/login')
   }
  return (
    <div>
      <CssBaseline />
      <Grid container>
        <Grid item xs={4}sx={{backgroundColor: "gray", p: 5, color: 'white'}}>
        <Typography variant='h5'>Email : sonal@gmail.com</Typography>
        <Typography variant='h6'>Email : sonal@gmail.com</Typography>
        <Button variant="contained" color="success" size='large' onClick={handeLogout} sx={{mt:8}} > Logout</Button>
        </Grid>
        <Grid item sm={8} >
        <Changepassword />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
