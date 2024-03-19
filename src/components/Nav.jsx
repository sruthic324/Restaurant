import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <AppBar style={{backgroundColor:'#E8E6E6'}}> 
        <Toolbar>
            <Typography sx={{flexGrow:1}} align='left' variant='h5' style={{ color: 'white', fontSize: '24px', fontFamily: 'monospace' }} >
               {/* Tea Talk */}
               <img style={{width:100}}
                  src="assets/Tt.png"
                  alt=""
                  title=""
                />
            </Typography> 
           
                  <Button style={{color:'black'}}>
                     <Link to='/' style={{color:"black" , fontFamily: 'monospace'}}>Home</Link>
                     
                  </Button>
                  <Button style={{color:'black'}}>
                     <Link to='/l' style={{color:"black" , fontFamily: 'monospace'}}>Login</Link>
                  </Button>
                  <Button style={{color:'black'}}>
                     <Link to='/s' style={{color:"black" , fontFamily: 'monospace'}}>Signup</Link>
                  </Button>
                  <Button style={{color:'black'}}>
                     <Link to='/d' style={{color:"black" , fontFamily: 'monospace'}}>Dashboard</Link>
                  </Button>
        </Toolbar>
     </AppBar>
    </div>
  )
}

export default Nav