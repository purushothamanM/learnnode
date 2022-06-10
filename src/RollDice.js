import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import RewardTable from './RewardTable'
import { Table } from '@mui/material';
import { TableContainer } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableBody } from '@mui/material';

export default class RollDice extends Component {
	constructor(){
		super();
		this.state={
			leftdie:1,
			rightdie:1,
			Totalattempts:15,
            Usedattempts:0,
			Remaining:15,
			Extraattempts:0,
			Penaltyattemp:0,
			Points:0,
			Zero:0
		}
	}
	updation=(left,right,TotalPoints=0)=>{
		this.setState({
			leftdie:left,
			rightdie:right,
			Points:TotalPoints
		})
		let points = this.state.Points
		// if(points==5){
		// 	console.log("You won")
		// }
		let usedattempts=this.state.Usedattempts
		let totalattempts=this.state.Totalattempts
		let remainingattempts=this.state.Remaining
		let extraattempts=this.state.Extraattempts
		let penaltyattemp= this.state.Penaltyattemp
		let Zero=0
		if(this.state.leftdie==0&&this.state.rightdie==0&& Zero==0){
           this.setState({
			Points: points+0,
			Usedattempts:usedattempts+1,
			Totalattempts:totalattempts,
			Remaining:remainingattempts-1,
			Penaltyattemp:penaltyattemp+0,
			Zero:1
		   }
		)
			
		}
		else if(this.state.leftdie==0&&this.state.rightdie==0&& Zero>0){
			this.setState({
				Points: points+0,
				Usedattempts:usedattempts+1,
				Totalattempts:totalattempts,
				Remaining:remainingattempts-1,
				Penaltyattemp:penaltyattemp+1
			   }
			)

		}
		 else if(this.state.leftdie==1&&this.state.rightdie==1){
			// return(this.state.Points+10,"you got 10 points")
			this.setState({
				Points:points+10,
				Usedattempts:usedattempts+1,
				Totalattempts:totalattempts,
				Remaining:remainingattempts-1 ,
				Extraattempts:extraattempts+1
				

			})
			
		}
		else if(this.state.leftdie==2&&this.state.rightdie==2){
			this.setState({
				Points:points+0,
				Usedattempts:usedattempts+1-1,
				Totalattempts:totalattempts,
				Remaining:remainingattempts-1,
				Penaltyattemp:penaltyattemp+1
			})
			
		}
		else if(this.state.leftdie==3&&this.state.rightdie==3){
			this.setState({
				Points:points+0,
				Usedattempts:usedattempts+1-1,
				Totalattempts:totalattempts,
				Remaining:remainingattempts-1,
				Penaltyattemp:penaltyattemp+1
			})
			
		}else if(this.state.leftdie==4&&this.state.rightdie==5){
			this.setState({
				Points:points+1,
				Usedattempts:usedattempts+1,
				Totalattempts:totalattempts,
				Remaining:remainingattempts-1
			})
			
		}else if(this.state.leftdie==5&&this.state.rightdie==6){
			this.setState({
				Points:points+2,
				Usedattempts:usedattempts+1,
				Totalattempts:totalattempts,
				Remaining:remainingattempts-1
			})
			
		}
		else if(this.state.leftdie==4&&this.state.rightdie==4){
			this.setState({
				Points:points+4,
				Usedattempts:usedattempts+1,
				Totalattempts:totalattempts,
				Remaining:remainingattempts-1
			})
			
		}
		else if(this.state.leftdie==5&&this.state.rightdie==5){
			this.setState({
				Points:points+6,
				Usedattempts:usedattempts+1,
				Totalattempts:totalattempts,
				Remaining:remainingattempts-1
			})
			
		}
		else if(this.state.leftdie==6&&this.state.rightdie==6){
			this.setState({
				Points:points+8,
				Usedattempts:usedattempts+1,
				Totalattempts:totalattempts,
				Remaining:remainingattempts-1
			})
		}
		else{
			this.setState({
				Points:points+0,
				Usedattempts:usedattempts+1,
				Totalattempts:totalattempts,
				Remaining:remainingattempts-1
			})
		}
		
	}
	roll=()=>{
		let die1=Math.floor(Math.random()*7);
		let die2=Math.floor(Math.random()*7);
		this.updation(die1,die2)
	}
  render() {
	  let Dice=this.state

	  let image={
		  0:<img style={{width:"250px"}} src="Dice0.png"></img>,
		  1:<img style={{width:"250px"}} src="Dice1.png"></img>,
		  2:<img style={{width:"250px"}} src="Dice2.png"></img>,
		  3:<img style={{width:"250px"}} src="Dice3.png"></img>,
		  4:<img style={{width:"250px"}} src="Dice4.png"></img>,
		  5:<img style={{width:"250px"}} src="Dice5.png"></img>,
		  6:<img style={{width:"250px"}} src="Dice6.png"></img>

	  }
	return (
		<div style={{background:"lightblue",height:"1500px"}}>
			<div style={{display:'flex',justifyContent:'center'}}>
				<p style={{ display:'around',paddingRight:'5px',color: 'lightblue'}}>{Dice.leftdie}</p>
				<p style={{color: 'lightblue'}}>{Dice.rightdie}</p><br/>
				<div style={{display:'flex',paddingRight:'5px'}}>
					<p style={{display:'around',paddingRight:'40px'}}>{image[Dice.leftdie]}</p>
					<p>{image[Dice.rightdie]}</p>
				</div>
				</div><br/><br/>
				
	  <div style={{display:'flex',justifyContent:'center'}} >
		  <button onClick={this.roll} disabled={Dice.Usedattempts<=14?false:true}>{Dice.Usedattempts<=15?"roll Dice":"Game Over"}</button></div> 
	  <div style={{display:'around',justifyContent:'right'}}>
				<h3 align="center"> POINTS:{Dice.Points}</h3><br/>
				{/* <h3 align="center">Usedattempts:{Dice.Usedattempts}</h3><br/> */}
				
				{/* {((Dice.Totalattempts<=0)&&(Dice.Points>=20&&))} */}
				

				{/* {((if(Dice.Remaining<=0)&&(Dice.Points>=20&&Dice.Points<35){

				}))} */}
				<TableContainer>
				<Table>
				<TableHead>
					<TableRow>
						<TableCell>
						Total attempts

						</TableCell>

						<TableCell>
						Used attempts

						</TableCell>
						<TableCell>
						Remaining attempts


						</TableCell>
						<TableCell>
						Penalty attempts


						</TableCell>
						<TableCell>
						Total Earned points

						</TableCell>
						<TableCell>
						Extra attempts 

						</TableCell>
						
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>
							Total Attempt : 15
						</TableCell>
						<TableCell>
						{Dice.Usedattempts}
						</TableCell>
						<TableCell>
						{Dice.Remaining}
						</TableCell>
						<TableCell>
						{Dice.Penaltyattemp}
						</TableCell>
						<TableCell>
						{Dice.Points}
						</TableCell>
						<TableCell>
						{Dice.Extraattempts}
						</TableCell>
					
					</TableRow>
				</TableBody>

				</Table>

				</TableContainer>
				
               
				{((Dice.Remaining<=0)&&(Dice.Points>=20&&Dice.Points<35))?<Table>
<TableCell>
					<h1 align="center">YOU WON Bronze <br/>
					<img  align="center" src='https://www.bing.com/th?id=OIP.63UkdzgNGT33o3Mm-XxemAHaJV&w=150&h=189&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'></img></h1>
					</TableCell>
					</Table>:((Dice.Remaining<=0)&&(Dice.Points>=35&& Dice.Points<50))?
				<Table>
<TableCell>
					<h1 align="center">YOU WON Silver <br/>
					<img  align="center" src='https://www.bing.com/th?id=OIP.63UkdzgNGT33o3Mm-XxemAHaJV&w=150&h=189&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'></img></h1>
					</TableCell>
					</Table>:((Dice.Remaining<=0)&&(Dice.Points>=35&& Dice.Points<50))?
					<Table>
						
						<TableCell>
                      <h1 align="center">YOU WON GOLD </h1>
					  <img sx={{ml:10}} align="center" src='https://www.bing.com/th?id=OIP.r7ZGWUZ3X8dyf_sVzD_lmAHaJy&w=150&h=198&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'></img>
					
						
					</TableCell>
				</Table>:((Dice.Remaining<=0)&&(Dice.Points<20))?
				<Table>
				<TableCell>
				<h1  align="center">You Lost...! Try Again..</h1>
				</TableCell>
				</Table>:((<button onClick={this.roll} disabled={Dice.Usedattempts<=14?false:true}>
					 {Dice.Usedattempts?"Rolling": "Roll dice"} </button>))}

				{/* {((Dice.Remaining<=0)&&(Dice.Points>=20&&Dice.Points<35))?<h1 align="center">YOU WON BRONZE </h1>
				:((Dice.Remaining<=0)&&(Dice.Points>=35&& Dice.Points<50))?<h1 align="center">YOU WON SILVER </h1>
				:((Dice.Remaining<=0)&&(Dice.Points>=35&& Dice.Points<50))?<h1 align="center">YOU WON GOLD </h1>
				:((Dice.Remaining<=0)&&(Dice.Points>20))?<h1>You Lost</h1>
				:((<button onClick={this.roll} disabled={Dice.Usedattempts<=14?false:true}> {Dice.Usedattempts?"Rolling": "Roll dice"} </button>))} */}
				   <div style={{display:'around',justifyContent:'center'}}>  
				   {/* <h3 align="center">Totalattempts :15</h3> */}
				<br/>
				{/* {/* <h3 align="center"> Remaing Attempts :{Dice.Remaining}</h3><br/>
				<h3 align="center"> Extra attempts :{Dice.Extraattempts}</h3>
			<h3 align="center"> Penalties :{Dice.Penaltyattemp}</h3>  */}   	</div>  
			</div>


	  
	  </div>
	)
  }
}

