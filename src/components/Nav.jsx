import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <AppBar style={{backgroundColor:'black'}}> 
        <Toolbar>
            <Typography sx={{flexGrow:1}} align='left' variant='h5' style={{ color: 'white', fontSize: '24px', fontFamily: 'monospace' }} >
               Tea Talk
              
            </Typography> 
           
                  <Button style={{color:'white'}}>
                     <Link to='/' style={{color:"white" , fontFamily: 'monospace'}}>Home</Link>
                     
                  </Button>
                  <Button style={{color:'white'}}>
                     <Link to='/l' style={{color:"white" , fontFamily: 'monospace'}}>Login</Link>
                  </Button>
                  <Button style={{color:'white'}}>
                     <Link to='/s' style={{color:"white" , fontFamily: 'monospace'}}>Signup</Link>
                  </Button>
        </Toolbar>
     </AppBar>
    </div>
  )
}

export default Nav