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



export default class NewTodolist1 extends Component {
    constructor(){
        super();
        this.state={
         task:"",
          reload:false
        }
      }




      validateForm = (e) => {
        e.preventDefault();
        
        let datas = JSON.parse(localStorage.getItem("set111")) || []   

        datas.push({ task: this.state.task })
        
        localStorage.setItem("set111", JSON.stringify(datas)); 
        
        
        
        this.setState({reload:true})
        if(this.state.reload==true){
            this.componentDidUpdate()
        }
    }








    contorl=(x)=>{
        let a=[];
        a.push({task:x.task})
        localStorage.setItem("p111",JSON.stringify(a))
        let b=[];
        b.push({task:x.task})
        localStorage.setItem("rd11",JSON.stringify(b))
        let c=JSON.parse(localStorage.getItem("cd11"))
        let index1=c.findIndex((x)=>{
            return b.some((y)=>{
                return x.task==y.task
            })
        })








        c.splice(index1,1)
        localStorage.setItem("cd11",JSON.stringify(c))
        let d=JSON.parse(localStorage.getItem("set111"))||[]
        let e=JSON.parse(localStorage.getItem("p111"))
        let f=[...d,...e]
        localStorage.setItem("set111",JSON.stringify(f))
        this.setState({reload:true})
        if(this.state.reload==true){
            this.componentDidUpdate()
        }
    }





    important=(x)=>{
        let a=[];
        a.push({task:x.task})
        localStorage.setItem("onekey1",JSON.stringify(a))
        let b=[];
        b.push({task:x.task})
        localStorage.setItem("remov1",JSON.stringify(b))
        let c=JSON.parse(localStorage.getItem("set111"))
        let index1=c.findIndex((x)=>{
            return b.some((y)=>{
                return x.task==y.task
            })
        })





        c.splice(index1,1)
        localStorage.setItem("set111",JSON.stringify(c))
        let d=JSON.parse(localStorage.getItem("it1"))||[]
        let e=JSON.parse(localStorage.getItem("onekey1"))
        let f=[...d,...e]
        localStorage.setItem("it1",JSON.stringify(f))
        this.setState({reload:true})
        if(this.state.reload==true){
            this.componentDidUpdate()
        }
       
    }
    clear=(x)=>{
        let a=[];
        a.push({task:x.task})
        localStorage.setItem("two1",JSON.stringify(a))
        let b=[];
        b.push({task:x.task})
        localStorage.setItem("removtwo1",JSON.stringify(b))
        let c=JSON.parse(localStorage.getItem("it1"))
        let index1=c.findIndex((x)=>{
            return b.some((y)=>{
                return x.task==y.task
            })
        })
        c.splice(index1,1)
        localStorage.setItem("it1",JSON.stringify(c))
        let d=JSON.parse(localStorage.getItem("set111"))||[]
        let e=JSON.parse(localStorage.getItem("two1"))
        let f=[...d,...e]
        localStorage.setItem("set111",JSON.stringify(f))
        this.setState({reload:true})
        if(this.state.reload==true){
            this.componentDidUpdate()
        }
       
    }
    remove=(x)=>{
        let a=[];
        a.push({task:x.task})
        localStorage.setItem("three1",JSON.stringify(a))
      
        let c=JSON.parse(localStorage.getItem("set111"))
        let index1=a.findIndex((x)=>{
            return c.some((y)=>{
                return x.task==y.task
            })
        })
        c.splice(index1,1)
        
        let d=JSON.parse(localStorage.getItem("set111"))||[]
        let e=JSON.parse(localStorage.getItem("two1"))
        let f=[...d,...e]
       
        this.setState({reload:true})
        if(this.state.reload==true){
            this.componentDidUpdate()
        }
    }

      andorid=(x)=>{

        let a=JSON.parse(localStorage.getItem("cd11"))||[]
        a.push({task:x.task})
        localStorage.setItem("cd11",JSON.stringify(a))
        let b=[];
        b.push({task:x.task})
        localStorage.setItem("remove1",JSON.stringify(b))
        let c = JSON.parse(localStorage.getItem("set111"))
        let indes1 = c.findIndex((x)=>{
            return b.some((y)=>{
                return x.task==y.task
            })
        })
c.splice(indes1,1)
localStorage.setItem("set111",JSON.stringify(c))

     
        this.setState({reload:true})
        if(this.state.reload==true){
            this.componentDidUpdate()
        }
           }
render() {
    let adorid = JSON.parse(localStorage.getItem("set111")) ||[]
    let complete = JSON.parse(localStorage.getItem("cd11"))||[]
    let importa = JSON.parse(localStorage.getItem("it1"))||[]
    
    return (
     
      <div   >
          
          <h1>important page</h1>
          <TableContainer  >
              <Table  sx={{ width:1550 }}>
                  <TableHead align="center" style={{ width: "100%" }} >
                  {
                        adorid.map((x)=>{
                            return (
                               
                                <div style={{display:"flex" ,marginTop:"10px",marginLeft:"20px" }}>
                               
                                        <TableRow>
                                            <TableCell  sx={{width:1500}}>{x.task}</TableCell>
                                            <TableCell sx={{width:50}}> <Button className="delete" style={{marginTop:"10px"}} 
                                      onClick={()=>this.andorid(x)}><CheckIcon/></Button></TableCell>
                                            <TableCell sx={{width:50}}>   <Button onClick={()=>this.important(x)}> <StarIcon/> </Button> </TableCell>
                                            <TableCell sx={{width:50}}> <Button onClick={()=>this.remove(x)}> -</Button></TableCell>
                                        </TableRow>
                                      </div>
                            )
                        })
                    }
                  </TableHead>
              </Table>
          </TableContainer>
    
                    <TableContainer>

                        <Table  sx={{ width:1550 }}>
                             <TableHead>
                        <TableCell align="center">
                        <div style={{display:"around" ,marginTop:"10px",marginLeft:"20px" }}>
                        <h1>Completed</h1>
                        </div>
                        </TableCell>
                    </TableHead>
                     
                    {
                        complete.map((x)=>{
                            return(
                                <div style={{display:"center" ,marginTop:"10px" }} >
                                     <TableRow>
                                 
                                   <TableCell sx={{width:1500}}>{x.task}</TableCell>
                                   <TableCell sx={{width:50}}> <Button  className="" style={{height:"20px",width:"50px",Top:"60px"}} onClick={()=>this.contorl(x)}><MinimizeIcon/></Button></TableCell>
                                   </TableRow>
                                </div>
                            )
                        })
                    }
                        </Table>
                    </TableContainer>
                   <TableContainer>

                       <Table   sx={{ width:1550 }}>
                           <TableHead align="center" >

                               <TableHead> <h1 style={{display:"center" ,marginTop:"10px",marginLeft:"20px" }}>Important</h1></TableHead>
                              

                    {
                            
                            importa.map((v)=>{
                            return(
                                <div style={{display:"flex" }}>
                                    <TableRow>
                                  
                                           <TableCell sx={{width:1500}} >{v.task}</TableCell>
                                           <TableCell  sx={{width:50}}><Button onClick={()=>this.clear(v)}> <ClearIcon/></Button></TableCell>
                                           </TableRow>
                                    </div>
                            )
                        })
                    }
                           </TableHead>
                       </Table>
                   </TableContainer>
                         
<form onSubmit={this.validateForm}>
        <TableContainer>
            <Table  sx={{ width:1550 }}>
            <TableCell align="right">
                  <div style={{display:"flex" ,marginTop:"25px",marginLeft:"20px" }}>

               
                      <input type="task" style={{width:"800px",color:"green",height:"30px"}}
                       placeholder="Add Task"
                       
                          onChange={e => this.setState({ task: e.target.value })} />
                          <button style={{width:"50px",height:"30px"}}>+</button>
                 
                
                    </div></TableCell>
                   

            </Table>
        </TableContainer>
        </form>    
            
                    
                
              
                   
      </div>
    
    )
  }
}