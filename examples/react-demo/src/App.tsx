import './App.css';
import React from 'react';

import {
	Button,
	Card,
	CheckBox,
	HFlex,
	VFlex,
	View,
	TextInput,
} from 'cyclops/web';
import { Post } from './components/glimpse/cross/posts/Post';
import { CreatePost } from './components/glimpse/cross/posts/CreatePost';

class App extends React.Component {
	showPost() {
		var ret: any[] = [];
		for (var i = 0; i < 20; i++) {
			ret.push(
				<Post
					body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa nunc, fringilla vestibulum accumsan id, auctor vel erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque tristique mi sapien, et elementum urna luctus ut. Praesent quam metus, porta vehicula semper non, gravida et quam."
					group="Hearthstone"
					author="Disguised Toast"
					timestamp="Dec 14 3:45 PM"
					profilePicUrl="https://pbs.twimg.com/profile_images/711015457134813188/7Qcunhqi_400x400.jpg"
					reactions={[
						{ emoji: '🚀', users: ['Austin', 'Brian', 'Helena'] },
					]}
				></Post>,
			);
		}
		return ret;
	}
	render() {
		return (
			<div className="App">
				<View
					style={{
						backgroundColor: '#EFEFEF',
						alignItems: 'center',
					}}
				>
					<Button
						label="hello"
						type="outlined"
						style={{ width: 200 }}
						disabled={true}
					></Button>
					<div style={{ width: '75%' }}>
						<CreatePost
							userName="Disguised Toast"
							profilePicUrl="https://pbs.twimg.com/profile_images/711015457134813188/7Qcunhqi_400x400.jpg"
							group="Among Us"
						/>
						{this.showPost().map((post: any) => post)}
					</div>
				</View>
			</div>
		);
	}
}

export default App;
