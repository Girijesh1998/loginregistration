import { TextField,Grid, Box } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1>Contact page</h1>
      <hr />
      <Grid container alignItems='center'>
        <Grid item sx={10}>
          <Box>
            <TextField
              helperText="Please enter your name"
              id="demo-helper-text-misaligned"
              label="Name"
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact