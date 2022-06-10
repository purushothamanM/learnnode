import React, { Component } from 'react'
import MyDay from './MyDay'

export default class Important extends Component {
  render() {
    return (
        <div  style={{ display:'fixed',backgroundColor:"lightpink" , width: '1500px', height: '1500px'}}>
             <div  align ="center" style={{backgroundColor:"lightpink"}}><h1>Important</h1></div>
             <div align ="center"><MyDay/></div>
             
             </div>
     
    )
  }
}
