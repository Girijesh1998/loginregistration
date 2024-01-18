import { Grid, Card, Typography, Tabs, Tab, Box } from "@mui/material";
import UserLogin from "./UserLogin";
import React, { useState } from "react";
import UserRegistration from "./UserRegistration";
import {ShoppingBag} from '@mui/icons-material';


const TabPanel =(props)=>{
    const {children, value, index}= props;
    return(
        <div role="tabpanel" hidden={value !== index}>
        {
            value === index && (
                <Box>{children}</Box>
            )
        }

        </div>
    )
}

const Login=()=>{
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) =>{
        setValue(newValue);
    }
    return<>
         <Grid container sx={{ height:'90vh'}}>
            <Grid item lg={7} sm={5} sx={{
                background: 'url("./images/code.png")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize:'cover',
                display:{xs:'none',sm:'block'}
            }}>
            </Grid>

            <Grid item lg={5} sm={7} xs={12}>
            <Card sx={{with:'100%',height:'100%'}}>
            <Box sx={{mx: 3}}>
                <Box sx={{borderBottom: 1 ,borderColor:'divider'}}>
                <Tabs value={value} textColor="secondary"  indicatorColor="secondary" onChange={handleChange}>
                <Tab sx={{textTransform :'none',fontWeight:'bold'}} label='Login'></Tab>
                <Tab sx={{textTransform :'none',fontWeight:'bold'}} label='Registration'></Tab>
                </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <UserLogin />
                </TabPanel>
                <TabPanel value={value} index={1}>
                <UserRegistration />
                </TabPanel>
            </Box>
            <Box textAlign='center' sx={{mt:2}} >
                <ShoppingBag sx={{color: 'purple', fontSize: '100'}}></ShoppingBag>
                <Typography variant="h5" sx={{fontWeight: 'bold'}}>Girijesh-React</Typography>
            </Box>
            </Card>
            </Grid>
         </Grid>
    </>
}
export default Login;