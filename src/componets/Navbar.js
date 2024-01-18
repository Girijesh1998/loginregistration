import {AppBar, Box ,Button,Toolbar, Typography} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar  position='static' color='secondary'>
        <Toolbar>
          <Typography variant='h5' component="div"  sx={{ flexGrow: 1 }}>
          LogIn
          </Typography>
          <Button component={NavLink} to="/" style={({isActive})=>{return{backgroundColor : isActive ? '#6d1b7b' : '',textTransform:'none'  } }} sx={{color:'white'}}>Home</Button>
          <Button component={NavLink} to="/Contact"  style={({isActive})=>{return{backgroundColor : isActive ? '#6d1b7b' : '' ,textTransform:'none' } }} sx={{color:'white'}}>Contact</Button>
          <Button component={NavLink} to="/Login"  style={({isActive})=>{return{backgroundColor : isActive ? '#6d1b7b' : '' ,textTransform:'none' } }} sx={{color :'white'}}>Login/Registration</Button>
        </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Navbar
