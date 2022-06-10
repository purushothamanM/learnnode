import React from "react";
import { useState } from "react";


const ToDoLists=(props)=>{
    const [state,setState]=useState("")
   
    const Call =(item)=>{
        console.log("item val",item);
        // state.push(item)
        // setState(item)
      
    console.log("state=>",item)
    }

     const onSelect=(item)=>{
        let datas= JSON.parse(localStorage.getItem("set1"))||[];
        datas.push(props.text)
       return (item)
        // console.log("assadsads",task);
      
      
       
     }
    // console.log("props",props.state)
   let cc= JSON.parse( localStorage.getItem( 'set' ) )
   console.log(props);
    return(
    
    <>
    <div className="todo_style">
      
    <li>{props.text} <button  onClick={()=>{props.onSelect(props.id)}}>-</button>
    <button onClick={()=>onSelect(props.id)}>+</button> 
    </li>
    {/* <button  onClick={()=>{props.onSelect(props.id)}}>+</button> </li> */}
   
       {
           cc.map((c)=>{
               return (
                   <div>
                        {/* <h1>{c}</h1> */}
                       </div>
               )
           })
       }
      
        </div>
       
        <div>
            {/* {state.map((ele)=>{
                // console.log("e=>",e)
               return ele 
            })} */}
       {state}
    </div>
    <li>
            {/* {props.state} */}
        </li>
    
     
     </>
    )
   
};
export default ToDoLists;