import React from 'react';
import './Tablecss.css';

// Example of a data array that
// you might receive from an API
const data = [
{ prize: "Gold", place: "1st", points: 50 },
{ prize: "Silver", place: "2nd", points: 35},
{ prize: "Bronze", place: "3rd", points: 20}
]

function App() {
return (
	<div className="App" style={{display:'flex',justifyContent:'center'}}>
      <h1></h1>
	<table>
        
		<tr>
		<th>Prize</th>
		<th>Place</th>
		<th>Points</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.prize}</td>
			<td>{val.place}</td>
			<td>{val.points}</td>
			</tr>
		)
		})}
	</table>
	</div>
);
}

export default App;




