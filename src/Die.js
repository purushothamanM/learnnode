
// import React, {Component} from 'react'

// import './Die.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// class Die extends Component{
// render(){
// 	const {face, rolling} = this.props
	
// 	return (
// 			<div>
// 				<FontAwesomeIcon icon={['fas', `fa-dice-${face}`]} className={`Die
// 				${rolling && 'Die-shaking'}`} />
// 			</div >
// 		)
// }
// }

// export default Die
// {((attempts<=0)&&(totalScore>=20&&totalScore<35))?<h1>YOU WON BRONZE </h1>:((attempts<=0)&&(totalScore>=35&&totalScore<50))?<h1>YOU WON SILVER </h1>

// {totalattempts<=0?"over":button onClick={this.roll}} {((Totalattempts<=0)&&(Points>=20&&Points<35))?<h1>YOU WON BRONZE </h1>:((Totalattempts<=0)&&(Points>=35&&Points<50))?<h1>YOU WON SILVER </h1>}



{((remining<=0)&&(totalScore>=20&&totalScore<35))?<h1>You Won Brzone </h1>:((remining<=0)&&(totalScore>=35&&totalScore<50))?<h1>You Won Silver </h1>:((remining<=0)&&(totalScore>=50&&totalScore<50))?<h1>You Won Gold</h1>:((remining<=0&&totalScore<20))?<h1>did not win</h1>:<button onClick={roll} disabled={rolling}> {rolling?"Rolling....": "Roll dice"} </button>}
{((remining<=0)&&(totalScore>=20&&totalScore<35))?
<h1>You Won Brzone </h1>:((remining<=0)&&(totalScore>=35&&totalScore<50))?
<h1>You Won Silver </h1>:((remining<=0)&&(totalScore>=50&&totalScore<50))?<h1>You Won Gold</h1>:((remining<=0&&totalScore<20))?
<h1>did not win</h1>:<button onClick={roll} disabled={rolling}> {rolling?"Rolling....": "Roll dice"} </button>}