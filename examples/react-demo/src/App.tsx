import './App.css';
import React from 'react';

import { Card, View, TextInput } from 'cyclops/web';
import { Post } from './components/glimpse/cross/posts/Post';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Post></Post>
			</div>
		);
	}
}

export default App;
