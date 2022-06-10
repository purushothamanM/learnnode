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
import NewTodolist1 from "./NewTodolist1";
import ValorCrm from './ValorCrm';
import Android from './Android';
import {Routes,Route, Link, useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import Newtodolist2 from "./Newtodolist2";
import NewTodolist3 from "./NewTodolist3";
import Newlist from "./Newlist";
import Newtodolist4 from "./Newtodolist4";
import Homepage from "./Homepage";
import { TextField } from '@mui/material';
const drawerWidth = 240;

function NEWsidebar(Items) {

  const [mobileOpen, setMobileOpen] =useState(false);
  const [andorid,setandorid]=useState(false);
  const [andorid1,setandorid1]=useState(false);
  const [andorid2,setandorid2]=useState(false)
  const [data,setData] = useState([]);
  const[state1,setstate]=useState(false);
  const [Name,setName]=useState([""])
  const [list,setlist]=useState("")
  const [seek1,setseek]=useState(false)
useEffect(()=>{
 
  setData(JSON.parse( localStorage.getItem( 'set' ) ) )
   console.log(">>",JSON.parse( localStorage.getItem( 'set' ) ) )
  
},[])
console.log("<<<<lko>>>>",data)

//  const click = ()=>{
//   setandorid1(false)
//       setandorid(true)
//       setandorid2(false)
//       setstate(false)
//       setseek(false)
//   }
  const click1 = ()=>{
    setandorid(false)
    // setandorid1(true)
    setandorid2(false)
    setstate(false)
    setseek(true)
}
// const click2 = ()=>{
//   setandorid(false)
//   setandorid1(false)
//   setandorid2(true)
//   setstate(false)
//   setseek(false)
// }
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
const function1=()=>{
  setandorid(false)
  setandorid1(false)
  setandorid2(false)
  setstate(false)
  setseek(false)
  let a=JSON.parse(localStorage.getItem("name"))||[]
  a.push({listname:Name})
  localStorage.setItem("name",JSON.stringify(a))


}

const pass = (x)=>{
  setandorid(false)
  setandorid1(true)
  setandorid2(false)
  setstate(false)
  setseek(false)
  let a =[]
  a.push({listname:x})
  setlist(x)
  localStorage.setItem("current",JSON.stringify(a))
}
const z=JSON.parse(localStorage.getItem("name"))||[]
let y=JSON.parse(localStorage.getItem("current"))
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
      
          {/* <ListItem >
            <ListItemButton onClick={click2}>
              <ListItemIcon>
              <MenuIcon/>  Andorid
              </ListItemIcon>
              <ListItemText  />
            </ListItemButton>
            
          </ListItem>
          <ListItem>
          <ListItemButton onClick={click}>
              <ListItemIcon>
              <MenuIcon/>  Valor CRM
              </ListItemIcon>
              <ListItemText  />
            </ListItemButton>
          </ListItem> */}
          <ListItem >
            <ListItemButton onClick={click1}>
              <ListItemIcon>
              <MailIcon/>  Important
              </ListItemIcon>
              <ListItemText  />
            </ListItemButton>
            
          </ListItem>
          <List>
      

{/*
key={x}  onClick={()=>sett(x.name)}

 */}

{
  z.map((f)=>{
    return(
      <div>
        <ListItem >
            <ListItemButton key={f} onClick={()=>pass(f.listname)}>
              <ListItemIcon>
           <MenuIcon/>  {f.listname}
           {console.log("cfcgh",f.listname)}
              </ListItemIcon>
              <ListItemText  />
            </ListItemButton>
            
          </ListItem>
      </div>
    )
  })
}
        </List>
         
          <form onSubmit={function1}>
          <div style={{display:"flex"  ,marginTop:"0%",marginLeft:"10px",width:"40px",height:"30px" }}>
          <TextField sx={{position:"fixed",top:"94%",right:"%",width:"11%",backgroundColor:'#ffff'}}
          type="text" position="fixed" placeholder="Create Newlist" value={Name} onChange={(e)=>setName(e.target.value)} ></TextField>
         
          </div>
          </form>
          
      </List>
      {/* <Button >egefr</Button> */}
    
     
    </div>
  );

  

  return (
    <Box sx={{ backgroundColor:"",display: 'flex' }}>
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
        <Box>
             {/* {andorid?<NewTodolist1/>:""} */}
            {/* {andorid1?<Newtodolist2/>:""}  */}
            </Box>
            <Box>
           
            { seek1?(y!="")?<Newtodolist2 list={list}/>:"":<NewTodolist3 list={list}/>}
            </Box>
            {localStorage.getItem('Name') && (
            <div>
               Name: <p>{localStorage.getItem('Name')}</p>
            </div>
         )}
           
        </Box>
        </Typography>
        
      </Box>
    </Box>
  );
}

;

export default NEWsidebar;