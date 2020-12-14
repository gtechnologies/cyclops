import './App.css';
import React from 'react';

import { Card, View, TextInput } from 'cyclops/web';

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
					}}
					alignItemsH={'center'}
				>
					<TextInput
						style={{ width: '80%' }}
						placeholder="Hello"
						placeholderTextColor={'lightgray'}
						onChangeText={(text) => console.log(text)}
					></TextInput>
				</View>
				<Card>
					<View
						style={{
							minWidth: 20,
							height: 200,
							backgroundColor: 'red',
						}}
					></View>
				</Card>
			</div>
		);
	}
}

export default App;
