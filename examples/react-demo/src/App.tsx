import './App.css';
import React from 'react';
import { Tooltip } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import {
	Button,
	IconButton,
	View,
	RadioButton,
	Select,
	VFlex,
} from 'cyclops/web';
import { Post } from './components/glimpse/cross/posts/Post';
import { CreatePost } from './components/glimpse/cross/posts/CreatePost';
import { PollPost } from './components/glimpse/cross/posts/PollPost';

import { TestableModal } from './components/testable';

import { Stories } from './components/stories';

interface AppProps {}
interface AppState {
	showTestableModal: boolean;
}

class App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
		this.state = {
			showTestableModal: false,
		};
	}

	showPost() {
		var ret: any[] = [];
		for (var i = 0; i < 2; i++) {
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
		const { showTestableModal } = this.state;
		return (
			<VFlex style={{ width: 300, height: 400, position: 'relative' }}>
				<Stories />
			</VFlex>
		);
		return (
			<div className="App">
				<TestableModal visible={showTestableModal} />
				<Button
					label="Show Testable Modal"
					onClick={() => {
						this.setState({
							showTestableModal: !showTestableModal,
						});
					}}
				/>
				<View
					style={{
						backgroundColor: '#EFEFEF',
						alignItems: 'center',
					}}
				>
					<RadioButton selected={true} />
					<Select
						options={[
							'option 1',
							'option 2: electric boogaloo',
							'some',
							'more',
							'options',
						]}
						multiSelect={false}
					/>
					<IconButton
						icon={
							<AccountCircleIcon
								style={{ fontSize: 20, color: 'white' }}
							/>
						}
						label={'profile'}
						type={'filled'}
						size={40}
					/>
					<Button label="hello" />
					<div style={{ width: '75%' }}>
						<CreatePost
							userName="Disguised Toast"
							profilePicUrl="https://pbs.twimg.com/profile_images/711015457134813188/7Qcunhqi_400x400.jpg"
							group="Among Us"
						/>
						<PollPost
							body="LOOK AT MY POLL"
							group="Hearthstone"
							author="Disguised Toast"
							timestamp="Dec 14 3:45 PM"
							profilePicUrl="https://pbs.twimg.com/profile_images/711015457134813188/7Qcunhqi_400x400.jpg"
							reactions={[
								{
									emoji: '🚀',
									users: ['Austin', 'Brian', 'Helena'],
								},
							]}
						></PollPost>
						{this.showPost().map((post: any) => post)}
					</div>
				</View>
			</div>
		);
	}
}

export default App;
