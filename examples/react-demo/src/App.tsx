import React from 'react';
import logo from './logo.svg';
import './App.css';

//import { View } from '../../../react-native';
import { View } from 'cyclops/react';

function App() {
	return (
		<div className="App">
			<h1>hello</h1>
			<View
				style={{ height: 100, width: 100, backgroundColor: 'red' }}
			></View>
		</div>
	);
}

export default App;
