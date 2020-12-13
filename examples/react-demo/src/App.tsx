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
				<View></View>
			</div>
		);
	}
}

export default App;
