import { Button } from '@mui/material'
import React from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook';

import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { Link } from 'react-router-dom';
// import Order from './components/Order';
// import Menu from './components/Menu';
const Dashboard = () =>  {
  
  return (
    <div>
 <br /><br /><br /><br /> <br /><br /><br /><br />

    <Button style={{color:'black'}}>
                     Dashboard
                  </Button>
    
 <Button variant="outlined" startIcon={<RestaurantMenuIcon />}>  
  Order
  {/* <Link to="/o">
        <button>Go to Destination</button>
      </Link> */}
  <Link to='/o' style={{color:"black" , fontFamily: 'monospace'}}></Link> 
</Button> 
<Button variant="contained" endIcon={<MenuBookIcon />}>
  Menu
  <Link to='/m' style={{color:"black" , fontFamily: 'monospace'}}></Link>
</Button>
   
  </div>
  )
}

export default Dashboard