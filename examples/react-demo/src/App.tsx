import './App.css';
import React from 'react';

import { View, TextInput } from 'cyclops/web';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div
					style={{
						flex: 1,
						width: 100,
						height: 100,
						backgroundColor: 'red',
					}}
				></div>
				<View
					style={{
						height: 200,
						width: 200,
						backgroundColor: 'green',
					}}
					alignItemsH={'center'}
				>
					<TextInput
						style={{ width: '100%' }}
						placeholder="Hello"
						placeholderTextColor={'lightgray'}
						onChangeText={(text) => console.log(text)}
					></TextInput>
				</View>
			</div>
		);
	}
}

export default App;
