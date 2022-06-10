import { Component } from "react";
import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DangerousIcon from '@mui/icons-material/Dangerous';
import GradeIcon from '@mui/icons-material/Grade';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import FetchAPI from './Jsonapi';
class Newtodo extends Component{
    constructor(props){
        super(props);
        this.state={
            task:"",
            reload:false,
            important:0
        }
    }
    createtask=(e)=>{
        e.preventDefault();
        let a=JSON.parse(localStorage.getItem("newtask")) || [];
        let b=JSON.parse(localStorage.getItem("currenttask"))
        a.push({
            taskname:this.state.task,
            currenttask:this.props.list
        })
        localStorage.setItem("newtask",JSON.stringify(a));
        this.setState({task:""})
        this.setState({reload:true})
        if(this.state.reload==true){
            this.componentDidUpdate()
        }
    }
    completed=(x)=>{
        let a=JSON.parse(localStorage.getItem("completed3"))|| [];
        a.push({taskname:x.taskname,currenttask:x.currenttask})
        localStorage.setItem("completed3",JSON.stringify(a))
        let b=[];
        b.push({taskname:x.taskname})
        localStorage.setItem("remove3",JSON.stringify(b))
        let c=JSON.parse(localStorage.getItem("newtask"))
        let index1=c.findIndex((x)=>{
            return b.some((y)=>{
                return x.taskname==y.taskname
            })
        })
        c.splice(index1,1)
        localStorage.setItem("newtask",JSON.stringify(c))
        this.setState({reload:true})
        if(this.state.reload==true){
            this.componentDidUpdate()
        }
    }
    important=(x)=>{
        if(this.state.important==0){
            let a=JSON.parse(localStorage.getItem("important3"))||[];
            a.push({taskname:x.taskname,currenttask:x.currenttask})
            localStorage.setItem("important3",JSON.stringify(a))
            let b=[];
            b.push({taskname:x.taskname})
            localStorage.setItem("removefromimportant3",JSON.stringify(b))
            let c=JSON.parse(localStorage.getItem("newtask"))
            let index1=c.findIndex((x)=>{
                return b.some((y)=>{
                    return x.taskname==y.taskname
                })
            })
            c.splice(index1,1)
            localStorage.setItem("newtask",JSON.stringify(c))
            this.setState({reload:true})
        if(this.state.reload==true){
            this.componentDidUpdate()
        }
        }
    }
    delete=(x)=>{
        let a=[];
        a.push({taskname:x.taskname});
        localStorage.setItem("delete3",JSON.stringify(a));
        let b=JSON.parse(localStorage.getItem("newtask"));
        let index1=b.findIndex((x)=>{
            return a.some((y)=>{
                return x.taskname==y.taskname
            })
        })
        b.splice(index1,1)
        localStorage.setItem("newtask",JSON.stringify(b))
        this.setState({reload:true})
        if(this.state.reload==true){
            this.componentDidUpdate()
        }
    }
    pending=(x)=>{
        let a=[];
        a.push({taskname:x.taskname,currenttask:x.currenttask})
        localStorage.setItem("pending3",JSON.stringify(a))
        let b=[];
        b.push({taskname:x.taskname})
        localStorage.setItem("removefromcompleted3",JSON.stringify(b))
        let c=JSON.parse(localStorage.getItem("completed3"))
        let index1=c.findIndex((x)=>{
            return b.some((y)=>{
                return x.taskname==y.taskname
            })
        })
        c.splice(index1,1)
        localStorage.setItem("completed3",JSON.stringify(c))
        let d=JSON.parse(localStorage.getItem("newtask"))||[]
        let e=JSON.parse(localStorage.getItem("pending3"))
        let f=[...d,...e]
        localStorage.setItem("newtask",JSON.stringify(f))
        this.setState({reload:true})
        if(this.state.reload==true){
            this.componentDidUpdate()
        }
    }
    removeimportant=(x)=>{
        let a=[];
        a.push({taskname:x.taskname,currenttask:x.currenttask})
        localStorage.setItem("unimportant3",JSON.stringify(a))
        let b=[];
        b.push({taskname:x.taskname})
        localStorage.setItem("removeimportant3",JSON.stringify(b))
        let c=JSON.parse(localStorage.getItem("important3"))
        let index1=c.findIndex((x)=>{
            return b.some((y)=>{
                return x.taskname==y.taskname
            })
        })
        c.splice(index1)
        localStorage.setItem("important3",JSON.stringify(c))
        let d=JSON.parse(localStorage.getItem("newtask"))||[]
        let e=JSON.parse(localStorage.getItem("unimportant3"))
        let f=[...d,...e]
        localStorage.setItem("newtask",JSON.stringify(f))
        this.setState({reload:true})
        if(this.state.reload==true){
            this.componentDidUpdate()
        }
    }
    render(){
        let a=JSON.parse(localStorage.getItem("newtask"))||[]
        let b=JSON.parse(localStorage.getItem("currenttask"))||[]
        let c=a.filter((x)=>{
            return b.some((y)=>{
                return x.currenttask==y.currenttask
            })
        })
        let d=JSON.parse(localStorage.getItem("completed3"))||[]
        let e=JSON.parse(localStorage.getItem("currenttask"))||[]
        let f=d.filter((x)=>{
            return e.some((y)=>{
                return x.currenttask==y.currenttask
            })
        })
        let g=JSON.parse(localStorage.getItem("important3"))||[]
        let h=g.filter((x)=>{
            return e.some((y)=>{
                return x.currenttask==y.currenttask
            })
        })
        return(
            <div>
                <h1>{b.map((x)=>{
                    return x.currenttask
                })}</h1>
                <TableContainer>
                    <Table sx={{ width:1550 }}>
                        <TableHead>
                        {h.map((x)=>{
                       return <><TableRow style={{backgroundColor:"#87bda0"}}><TableCell align="center">{<GradeIcon color="primary" onClick={()=>this.removeimportant(x)}/>}</TableCell><TableCell align="center">{x.taskname}</TableCell><TableCell align="center"><Button><CheckCircleIcon/></Button></TableCell></TableRow><br/></>
                   })}
                        </TableHead>
                    </Table>
                </TableContainer>
                    <TableContainer>
                        <Table sx={{ width:1550 }} >
                            <TableHead>
                   {c.map((x)=>{
                       return <>
                       <TableRow style={{backgroundColor:"wheat"}}><TableCell align="center">{<GradeIcon color="disabled" onClick={()=>this.important(x)}/>}</TableCell>
                       <TableCell align="center">{x.taskname}</TableCell><TableCell align="center"><Button onClick={()=>this.completed(x)}><CheckCircleIcon/></Button><Button onClick={()=>this.delete(x)}><DeleteIcon/></Button></TableCell></TableRow><br/></>
                   })}
                   </TableHead>
                        </Table>
                    </TableContainer>
                {(f.length!=0)?<TableContainer>
                <Table sx={{ width:1550 }} >
                    <TableHead><TableRow ><TableCell colSpan={3} align="center"><h1>COMPLETED TASKS</h1></TableCell></TableRow></TableHead>
                   <TableHead>
                    {f.map((x)=>{
                       return <><TableRow style={{backgroundColor:"#7ad9e0"}}><TableCell className="completed-task" colSpan={2} align="center">{x.taskname}</TableCell><TableCell align="center"><Button onClick={()=>this.pending(x)}><DangerousIcon/></Button></TableCell></TableRow><br/></>
                   })}
                   </TableHead>
                </Table>
                </TableContainer>:""}
                <form onSubmit={this.createtask}>
                                    <TextField  type="text" required value={this.state.task} 
                    onChange={(e)=>this.setState({task:e.target.value})} style={{position:"fixed",top:"90%",right:"1%",width:"86%"}} /> <AddIcon style={{position:"absolute",top:"91.5%",right:"1%"}}/>
                    {/* <button type="submit">ADD</button> */}
                </form>
            </div>
        )
    }
}
export default Newtodo;