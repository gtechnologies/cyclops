import './App.css';
import React from 'react';

import { View } from 'cyclops/web';

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
					<View
						style={{
							width: 20,
							height: 40,
							backgroundColor: 'yellow',
						}}
					></View>
				</View>
			</div>
		);
	}
}

export default App;
