import React from 'react';

import {Routes,Route } from "react-router-dom";



import Api1 from './Api1';

import Posting from './Posting';


function App() {
return (
	<div>
		
		<div>
		 <Routes>
		 <Route path="/" element={<Api1/>}></Route>
			 <Route path="/Posting" element={<Posting/>}></Route>
		 </Routes>
		</div>
		
	
	</div>
);
}

export default App;
