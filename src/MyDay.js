import React,{useState,useEffect} from "react";
import ToDoLists from "./ToDoLists";
const MyDay=({data})=>{
    useEffect(()=>{
        console.log("state =>",data)
    },[data])

const [inputList,setInputList]=useState("");
const [Items,setItems]=useState([]);
const [Datas, setData]=useState([]);

const onlineEpi = {
 1: '0',
   0: '1',
   };
  const finalData = [{
     text:"important",online:"0"
  },{
   text:"important11",online:"0"
  },{
   text:"important22",online:"1"
  }]
 const sortListData = finalData.sort((a, b) => onlineEpi[a.online] - onlineEpi[b.online]);
 console.log(sortListData)


useEffect(()=>{
   
    setData(JSON.parse( localStorage.getItem( 'set' ) ) )
    
  },[])
  console.log("hndjd",Datas)
                                                                                                                  
const itemEvent=(event)=>{
    setInputList(event.target.value)
};
const listOfItems =()=>{
    Items.push(inputList)
    let a=localStorage.setItem( 'set', JSON.stringify(Items) )
    
    console.log(a)
 
    setInputList('')
}

const deleteItem1=(id)=>{
    console.log("deleted")
    setData((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
            return index !== id;
        })
    })
     let a=localStorage.setItem( 'set', JSON.stringify(Items) )
     console.log( "dfsf",a)
   }

const deleteItem=(id)=>{
 console.log("deleted")
 setItems((oldItems)=>{
     return oldItems.filter((arrElem,index)=>{
         return index !== id;
     })
 })
  let a=localStorage.setItem( 'set', JSON.stringify(Items) )
  console.log( "dfsf",a)
}

console.log("Item 1",Items)

return (
    <>
    <div>
        <div>
            <br/>
                      To Do List
              <br/>
              <input type="text" placeholder="Add a Items" 
               value={inputList}
               onChange={itemEvent}/>
              <button onClick={()=>listOfItems()}>+</button>
               
                  
                       
                         {Items.map((itemval,index)=>{
                             return(
                            <ToDoLists
                             key={index}
                              id={index} 
                              text ={itemval}
                              onSelect={deleteItem}/>
                             )
                         })}
                           {Datas.map((itemval,index)=>{
                             return(
                            <ToDoLists
                             key={index}
                              id={index} 
                              text ={itemval}
                              onSelect={deleteItem1}/>
                             )
                         })}






                  
              

        </div>








    </div>
    </>
)


}
export default MyDay