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

export default class NewTodolist1 extends Component {
    constructor(props){
        super(props);
        this.state={
         task:"",
          reload:false,
          important:0
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
        let d=JSON.parse(localStorage.getItem("set11"))||[]
        let e=JSON.parse(localStorage.getItem("two"))
        let f=[...d,...e]
        localStorage.setItem("set11",JSON.stringify(f))
        this.setState({reload:true})
        if(this.state.reload==true){
            this.componentDidUpdate()
        }
       
    }
    


render() {
   
    let b=JSON.parse(localStorage.getItem("currenttask"))||[]
    let a=JSON.parse(localStorage.getItem("set11"))||[]
    let c=a.filter((x)=>{
        return b.some((y)=>{
            return x.current==y.current
        })
    })
    let d=JSON.parse(localStorage.getItem("set11"))||[]
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

    console.log("complte",complete1)
    console.log("name",name)
    console.log("jhsjdhs",f)
    
    return (
     
      <div style={{ display:"flex",backgroundColor: '',   width: '1555px',marginLeft:"-19px",marginTop:"-40px",
       display:"fixed"}}   >
          
        <h1 align="">important page</h1>
       
           
          <TableContainer  >
          
                   <TableContainer>

                       
                           <TableHead align="center" >

                               <TableHead> <h1 style={{display:"center" ,marginTop:"10px",marginLeft:"20px" }}></h1></TableHead>
                              

                    {
                            
                            y.map((v)=>{
                            return(
                                <div style={{display:"flex" }}>
                                    <TableRow style={{backgroundColor:'#6bc0e9', color: 'white',}}>
                                
                                           <TableCell sx={{width:1500}} >{v.task}</TableCell>
                                           <TableCell  sx={{width:50}}><Button onClick={()=>this.clear(v)}> <ClearIcon/></Button></TableCell>
                                           </TableRow>
                                    </div>
                            )
                        })
                    }
                           </TableHead>
                     
                   </TableContainer>
                         

                    
                
        </TableContainer>     
                
      </div>
    
    )
  }
}