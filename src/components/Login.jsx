import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
    <br /> <br /><br />  <br /> <br /><br />
    <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
    <Typography variant='h2' style={{color: 'orange',fontFamily: 'serif',fontSize: '48px',fontWeight: 'bold',}}>Login Page</Typography>
    <br />
    <TextField variant='outlined' label='enter username' focused color='secondary' />
    <br /><br />
    <TextField variant='outlined' label='Enter password' focused color='secondary' />
    <br /><br />
    {/* <TextField label='hello' color='secondary' focused /> */}

   
    <br />
    <br />
    <Button variant='outlined'>Submit</Button>
    <Grid container>
              <Grid item xs> 
                <Link href="#" variant="body2">
                  Forgot password?
                </Link> 
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
    <br /><br /><br /><br />
    </Box> 

</div>
  )
}

export default Login