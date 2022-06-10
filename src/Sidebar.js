import React,{useState, useEffect} from "react";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MyDay from './MyDay';
import Important from "./Important";

import ValorCrm from './ValorCrm';
import Android from './Android';
import {Routes,Route, Link, useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
const drawerWidth = 240;

function Sidebar(Items) {

  const [mobileOpen, setMobileOpen] =useState(false);
  const [andorid,setandorid]=useState(false);
  const [andorid1,setandorid1]=useState(false)
  const [data,setData] = useState([])
useEffect(()=>{
 
  setData(JSON.parse( localStorage.getItem( 'set' ) ) )
   console.log(">>",JSON.parse( localStorage.getItem( 'set' ) ) )
  
},[])
console.log("<<<<lko>>>>",data)

 const click = ()=>{
  setandorid1(false)
      setandorid(true)
  }
  const click1 = ()=>{
    setandorid(false)
    setandorid1(true)
}
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // setMobileOpen(false)

//   Route=()=>{
//    return (<ValorCrm/>)
//   }
//   const navigate = useNavigate();
//   const hi=()=>{
//     navigate('/homepage')
//   }
//   const bye=()=>{
//     navigate('/homepage')
//   }
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
      
          <ListItem >
            <ListItemButton onClick={click}>
              <ListItemIcon>
               Andorid
              </ListItemIcon>
              <ListItemText  />
            </ListItemButton>
            
          </ListItem>
          <ListItem>
          <ListItemButton onClick={click}>
              <ListItemIcon>
               Valor CRM
              </ListItemIcon>
              <ListItemText  />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton onClick={click1}>
              <ListItemIcon>
               Important
              </ListItemIcon>
              <ListItemText  />
            </ListItemButton>
            
          </ListItem>

      </List>
      {/* <Button >egefr</Button> */}
      <Divider />
     
    </div>
  );

  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 4, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Valor Paytech 
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        <Drawer
        
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >

          {drawer}
        </Drawer>
        {/* {oldItems.map((e)=>{
          return ( e.id)
        })} */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography>
        <Box>
            {andorid?<MyDay/>:""}
            <Box>
            {andorid1?<Important/>:""}
            </Box>
           
        </Box>
        </Typography>
        
      </Box>
    </Box>
  );
}

;

export default Sidebar;
