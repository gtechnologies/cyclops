import React from 'react';
import logo from './logo.svg';
import './App.css';

//import { View } from '../../../react-native';
import { View, Button } from 'cyclops/web';

function App() {
	return (
		<div className="App">
			<h1>hello</h1>
			<View
				style={{
					height: 100,
					width: 100,
					backgroundColor: 'red',
					justifyContent: 'center',
					flexDirection: 'row',
        }}
			>
				<View
					style={{ height: 10, width: 10, backgroundColor: 'yellow' }}
				></View>
        <Button onClick={() => {
          alert('hiya')
        }}></Button>
			</View>
		</div>
	);
}

export default App;
