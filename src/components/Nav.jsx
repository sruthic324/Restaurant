import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';

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
                     <Link to='/' style={{color:"black" , fontFamily: 'initial', fontSize:'25px'}}>Home</Link>
                  </Button>
                  <Button style={{color:'black'}}>
                     <Link to='/l' style={{color:"black" , fontFamily: 'initial',fontSize:'25px'}}>Login</Link>
                  </Button>
                  <Button style={{color:'black'}}>
                     <Link to='/s' style={{color:"black" , fontFamily: 'initial',fontSize:'25px'}}>Signup</Link>
                  </Button>
                  <Button style={{color:'black'}}>
                     <Link to='/d' style={{color:"black" , fontFamily: 'initial',fontSize:'25px'}}>Dashboard</Link>
                  </Button>
                  <Button style={{color:'black'}}>
                     <Link to='/m' style={{color:"black" , fontFamily: 'initial',fontSize:'25px'}}>Menu</Link>
                  </Button>
        </Toolbar>
     </AppBar>
    </div>
  )
}

export default Nav