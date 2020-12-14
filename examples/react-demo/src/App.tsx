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
					style={{ width: 50, height: 50, backgroundColor: 'red' }}
				></View>
				<View
					style={{
						width: 100,
						height: 100,
						backgroundColor: 'red',
						alignItems: 'center',
					}}
					alignItemsH="center"
					alignItemsV="space-around"
				>
					<View
						style={{
							width: 20,
							height: 20,
							backgroundColor: 'pink',
						}}
					></View>
					<View
						style={{
							width: 20,
							height: 20,
							backgroundColor: 'pink',
						}}
					></View>
				</View>
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
				<Card style={{ width: 200 }}>
					<View
						style={{
							height: 200,
							backgroundColor: 'red',
							width: '100%',
						}}
					></View>
				</Card>
			</div>
		);
	}
}

export default App;
