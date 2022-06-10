import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Todo2 from './Todo2';
import Todo1 from './Todo1';
import { useState } from 'react';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import HomeIcon from '@mui/icons-material/Home';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Newtodo from './Newtodo';
import AddIcon from '@mui/icons-material/Add';
import Important from './Important';
const drawerWidth = 240;
export default function Sidebar() {
const [task,settask]=useState("");
const [android,setandroid]=useState(false)
const [crm,setcrm]=useState(false)
const [home,setHome]=useState(false)
const [important,setimportant]=useState(false)
const [reload,setreload]=useState(false)
const [newlist,setnewlist]=useState(false)
const [list,setlist]=useState("")
const handlesubmit=(e)=>{
  e.preventDefault();
  let a=JSON.parse(localStorage.getItem("newlist")) || [];
  let lists=a.map((x)=>x.taskname)
     if(lists.includes(task)) {
       alert("TASK NAME ALREADY ADDED")
     }
     else{
        a.push({
            taskname:task,
        })
        localStorage.setItem("newlist",JSON.stringify(a));
        settask("")
        setreload(true)
        if(reload==true){
          this.componentDidUpdate()
        }
}}
const show1=()=>{
    setandroid(true)
    setcrm(false)
    setHome(false)
    setnewlist(false)
    setimportant(false)
}
const show2=()=>{
    setcrm(true)
    setandroid(false)
    setHome(false)
    setnewlist(false)
    setimportant(false)
}
const homepage=()=>{
  setHome(true)
  setandroid(false)
  setcrm(false)
  setnewlist(false)
  setimportant(false)
}
const importantpage=(x)=>{
  setHome(false)
  setandroid(false)
  setcrm(false)
  setnewlist(false)
  setimportant(true)
  let a=[]
  localStorage.setItem("currenttask",JSON.stringify(a))
}
const show3=(x)=>{
  setHome(false)
  setandroid(false)
  setcrm(false)
  setnewlist(true)
  setimportant(false)
  setlist(x)
  let a=[]
  a.push({
    currenttask:x
  })
  localStorage.setItem("currenttask",JSON.stringify(a))
}
let z=JSON.parse(localStorage.getItem("newlist"))||[];
let y=JSON.parse(localStorage.getItem("currenttask"))
  return (
    <Box sx={{ display: 'flex' }}  >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ bgcolor: '#0078d7'}}
      >
        <Toolbar >
          <Typography variant="h6" noWrap component="div">
          </Typography>
        </Toolbar>
      </AppBar >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:"#f3f2f1"
          },
        }
      }
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ bgcolor: '#0078d7'}}><PlaylistAddCheckIcon/></Toolbar>
        <Divider />
        {/* <List style={{backgroundColor:"#f3f2f1"}}>
          {[<HomeIcon/>].map((text,index)=>(
            <ListItem button key={text} onClick={homepage}>
              <ListItemText primary={text}/>
            </ListItem>
          ))}
        </List> */}
        <Divider/>
        <List style={{backgroundColor:"#f3f2f1"}}>
          {["IMPORTANT"].map((text,index)=>(
            <ListItem button key={text} onClick={()=>importantpage(text)}>
              <ListItemText primary={text}/>
            </ListItem>
          ))}
        </List>
        <Divider/>
        <List style={{backgroundColor:"#f3f2f1"}} >
          {/* {["CRM"].map((text, index) => (
            <ListItem button key={text} onClick={show1}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          {["ANDROID"].map((text, index) => (
            <ListItem button key={text} onClick={show2}>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
          {z.map((text)=>(
            <ListItem button key={text} onClick={()=>show3(text.taskname)}>
              <ListItemText primary={text.taskname}/>
            </ListItem>
          ))
          }
        </List>
        <div>
          <form onSubmit={handlesubmit}>
            <TextField type="text" required value={task} onChange={(e)=>settask(e.target.value)} style={{position:"fixed",top:"90%",right:"88%"}} /><AddIcon onclick={handlesubmit}style={{position:"fixed",top:"91.3%",right:"88%"}}/>
          </form>
        </div>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />
        <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Typography paragraph>
{android?<Todo2/>:""}</Typography>
</Box>
<Box sx={{  bgcolor: 'background.default'}}>
          {crm?<Todo1/>:""}
      </Box>
      <Typography paragraph>
{(y!="")?<Newtodo list={list}/>:<Important/>}
</Typography>
{/* <Box sx={{  bgcolor: 'background.default'}}>
{important?<Important list={list}/>:""}
</Box> */}
      </Box>
    </Box>
  );
}