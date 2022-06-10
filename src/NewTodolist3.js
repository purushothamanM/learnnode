import { Button } from '@mui/material'; 
import React, { Component } from 'react'
import StarIcon from '@mui/icons-material/Star';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import GradeIcon from '@mui/icons-material/Grade';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

export default class NewTodolist1 extends Component {
    constructor(props){
        super(props);
        this.state={
         task:"",
          reload:false,
          important:0
        }
      }
0
// handclick=()=>{
//     this.state={
//         task=""
//     }
// }
   
   

      validateForm = (e) => {
        e.preventDefault();
        
        let datas = JSON.parse(localStorage.getItem("set1")) || []   

        datas.push({ task: this.state.task,currenttask:this.props.list })
        
        localStorage.setItem("set1", JSON.stringify(datas)); 
        
        
        
        this.setState({reload:true})
        if(this.state.reload==true){
            this.componentDidUpdate()
        }
    }

    contorl=(x)=>{
        let a=[];
        a.push({task:x.task, currenttask:this.props.list})
        localStorage.setItem("p1",JSON.stringify(a))
        let b=[];
        b.push({task:x.task, currenttask:this.props.list})
        localStorage.setItem("rd1",JSON.stringify(b))
        let c=JSON.parse(localStorage.getItem("cd1"))
        let index1=c.findIndex((x)=>{
            return b.some((y)=>{
                return x.task==y.task
            })
        })








        c.splice(index1,1)
        localStorage.setItem("cd1",JSON.stringify(c))
        let d=JSON.parse(localStorage.getItem("set1"))||[]
        let e=JSON.parse(localStorage.getItem("p1"))
        let f=[...d,...e]
        localStorage.setItem("set1",JSON.stringify(f))
        this.setState({reload:true})
        if(this.state.reload==true){
            this.componentDidUpdate()
        }
    }





    important=(x)=>{
        let a=[];
        a.push({task:x.task, currenttask:this.props.list})
        localStorage.setItem("onekey",JSON.stringify(a))
        let b=[];
        b.push({task:x.task, currenttask:this.props.list})
        localStorage.setItem("remov",JSON.stringify(b))
        let c=JSON.parse(localStorage.getItem("set1"))
        let index1=c.findIndex((x)=>{
            return b.some((y)=>{
                return x.task==y.task
            })
        })





        c.splice(index1,1)
        localStorage.setItem("set1",JSON.stringify(c))
        let d=JSON.parse(localStorage.getItem("it"))||[]
        let e=JSON.parse(localStorage.getItem("onekey"))
        let f=[...d,...e]
        localStorage.setItem("it",JSON.stringify(f))
        this.setState({reload:true})
        if(this.state.reload==true){
            this.componentDidUpdate()
        }
       
    }
    clear=(x)=>{
        let a=[];
        a.push({task:x.task, currenttask:this.props.list})
        localStorage.setItem("two",JSON.stringify(a))
        let b=[];
        b.push({task:x.task, currenttask:this.props.list})
        localStorage.setItem("removtwo",JSON.stringify(b))
        let c=JSON.parse(localStorage.getItem("it"))
        let index1=c.findIndex((x)=>{
            return b.some((y)=>{
                return x.task==y.task
            })
        })
        c.splice(index1,1)
        localStorage.setItem("it",JSON.stringify(c))
        let d=JSON.parse(localStorage.getItem("set1"))||[]
        let e=JSON.parse(localStorage.getItem("two"))
        let f=[...d,...e]
        localStorage.setItem("set1",JSON.stringify(f))
        this.setState({reload:true})
        if(this.state.reload==true){
            this.componentDidUpdate()
        }
       
    }
    remove=(x)=>{
        let a=[];
        a.push({task:x.task, currenttask:this.props.list})
        localStorage.setItem("three",JSON.stringify(a))
      
        let c=JSON.parse(localStorage.getItem("set1"))
        let index1=a.findIndex((x)=>{
            return c.some((y)=>{
                return x.task==y.task
            })
        })
        c.splice(index1,1)
        
        let d=JSON.parse(localStorage.getItem("set1"))||[]
        let e=JSON.parse(localStorage.getItem("two"))
        let f=[...d,...e]
       
        this.setState({reload:true})
        if(this.state.reload==true){
            this.componentDidUpdate()
        }
    }

      andorid=(x)=>{

        
        let a=JSON.parse(localStorage.getItem("cd1"))||[]
        a.push({task:x.task, currenttask:this.props.list})
        localStorage.setItem("cd1",JSON.stringify(a))
        let b=[];
        b.push({task:x.task, currenttask:this.props.list})
        localStorage.setItem("remove",JSON.stringify(b))
        let c = JSON.parse(localStorage.getItem("set1"))
        let indes1 = c.findIndex((x)=>{
            return b.some((y)=>{
                return x.task==y.task
            })
        })
c.splice(indes1,1)
localStorage.setItem("set1",JSON.stringify(c))

     
        this.setState({reload:true})
        if(this.state.reload==true){
            this.componentDidUpdate()
        }
           }
render() {
   
    let b=JSON.parse(localStorage.getItem("currenttask"))||[]
    let a=JSON.parse(localStorage.getItem("set111"))||[]
    let c=a.filter((x)=>{
        return b.some((y)=>{
            return x.current==y.current
        })
    })
    let d=JSON.parse(localStorage.getItem("set1"))||[]
    let e=JSON.parse(localStorage.getItem("current"))||[]
    let r=JSON.parse(localStorage.getItem("cd1"))||[]
    let y = JSON.parse(localStorage.getItem("it"))||[]




    let f=d.filter((x)=>{
        return e.some((y)=>{
            return x.currenttask==y.listname
        })
    })

    let name = e.map((d=>{
        return d.listname
    }))

    let complete1 = r.filter((x)=>{
     return    x.currenttask==name    
    })

    let impor = y.filter((s)=>{
        return s.currenttask==name
    })

    console.log("complte",complete1)
    console.log("name",name)
    console.log("jhsjdhs",f)
    
    return (
     
      <div style={{ display:"fixed",backgroundColor: '#f3f59f',   width: '1655px',marginLeft:"-19px",marginTop:"-40px",height:"1550px",marginBottom:"500px"}}>

          
        <h1 align="">{name}</h1>
       
            <h3 align="center"> Your task</h3>
          <TableContainer  >
             
                  <TableHead align="center" style={{ width: "100%" }} >
                  {
                        f.map((x)=>{
                            return (
                               
                                <div style={{display:"flex" ,marginTop:"1px",marginLeft:"px" }}>
                                  
                                        <Paper  elevation={3}>
                                        <TableRow style={{color: 'white',}}>
                                            <TableCell  sx={{width:1500}}>{x.task}</TableCell>
                                            <TableCell sx={{width:50}}> <Button className="delete" style={{marginTop:"10px"}} 
                                      onClick={()=>this.andorid(x)}><CheckIcon/></Button></TableCell>
                                            <TableCell sx={{width:50}}>   <Button onClick={()=>this.important(x)}> <StarIcon/> </Button> </TableCell>
                                            <TableCell sx={{width:50}}> <Button onClick={()=>this.remove(x)}> -</Button></TableCell>
                                        </TableRow>
                                        </Paper>
                                      </div>
                            )
                        })
                    }
                  </TableHead>
             
         
          <TableContainer>
                      
                            <TableHead>
                   {c.map((x)=>{
                       return <>
                       <paper>
                       <TableRow style={{backgroundColor:'', color: 'white',}} >
                           <TableCell align="center">{<GradeIcon color="disabled" onClick={()=>this.important(x)}/>}
                           </TableCell>
                       <TableCell  sx={{width:50}} align="center">{x.taskname}</TableCell><TableCell align="center"><Button onClick={()=>this.contorl(x)}><CheckCircleIcon/></Button><Button onClick={()=>this.clear(x)}><DeleteIcon/></Button></TableCell>
                       </TableRow><br/></paper></>
                   })}
                   </TableHead>
                        
                    </TableContainer>
 <TableContainer>

                       
                             <TableHead>
                        
                        <div style={{display:"flex" ,marginTop:"10px",marginLeft:"700px" }}>
                        <h1  align="center">Completed</h1>
                        </div>
                        
                    </TableHead>
                     
                    {
                        complete1.map((x)=>{
                            return(
                                <div style={{display:"center" ,marginTop:"1px" }} >
                                    <Paper elevation={3}>
                                     <TableRow style={{backgroundColor:''}}>
                                 
                                   <TableCell sx={{width:1500}}>{x.task}</TableCell>
                                   <TableCell sx={{width:50}}> <Button  className="" style={{height:"20px",width:"50px",Top:"60px"}} onClick={()=>this.contorl(x)}><MinimizeIcon/></Button></TableCell>
                                   </TableRow></Paper>
                                </div>
                            )
                        })
                    }
                        
                    </TableContainer> 
                   {/* <TableContainer>

                       <Table   sx={{ width:1550 }}>
                           <TableHead align="center" >

                               <TableHead> <h1 align="center" >Important</h1></TableHead>
                              

                    {
                            
                            impor.map((v)=>{
                            return(
                                <div style={{display:"flex" }}>
                                    <TableRow style={{backgroundColor:'#9097ee'}}>
                                
                                           <TableCell sx={{width:1500}} >{v.task}</TableCell>
                                           <TableCell  sx={{width:50}}><Button onClick={()=>this.clear(v)}> <ClearIcon/></Button></TableCell>
                                           </TableRow>
                                    </div>
                            )
                        })
                    }
                           </TableHead>
                       </Table>
                   </TableContainer> */}
                         
<form onSubmit={this.validateForm}>
        <TableContainer>
           <Box>
            
                  <div>

              
                    <TextField type="text"  sx={{position:"fixed",top:"94%",right:"",width:"82%",backgroundColor:'#ffff'}}
                       placeholder="Add Task" value={this.state.task}
                       
                          onChange={e => this.setState({ task: e.target.value })} />
                        
                 
                
                    </div>
                   
                    </Box>
           
        </TableContainer>
        </form>    
            
                    
                
        </TableContainer>     
           
      </div>
    
    )
  }
}