import React,{useState,useEffect} from "react";
import ToDoLists from "./ToDoLists";
const MyDay=({data})=>{


const [inputList,setInputList]=useState("");
const [Items,setItems]=useState([]);
const [Datas, setData]=useState([]);
const [complete,setcomplete]=useState([]);
const [state,setState]=useState([])
useEffect(()=>{
   
    setData(JSON.parse( localStorage.getItem( 'set' ) ) )
    
  },[])
  console.log("hndjd",Datas)
                                                                                                                  
const itemEvent=(event)=>{
    setInputList(event.target.value)
};
const listOfItems =()=>{
    Items.push(inputList)
    let a=localStorage.setItem( 'set', JSON.stringify(Items)||[] )
   
    console.log(a)
    
    setInputList('')
}


return (
    <div>
    <div>
        <div>
            <br/>
                      To Do List
              <br/>
              <input type="text" placeholder="Add a Items" 
               value={inputList}
               onChange={itemEvent}/>
              <button onClick={()=>listOfItems()}>+</button>
               
           {state} <p> completed</p> 
        </div>
     
    </div>
    </div>
)


}
export default MyDay