/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, View as RNView } from 'react-native';

import { Button, Card, Text, TextInput, View, VFlex } from 'cyclops/native';
import { Post } from './src/components/glimpse/cross/posts/Post';
import { CreatePost } from './src/components/glimpse/cross/posts/CreatePost';

import { TestableModal } from './src/components/testable';

import { StoriesDemo } from './src/components/stories';

declare const global: { HermesInternal: null | {} };

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
	render() {
		const { showTestableModal } = this.state;
		return <StoriesDemo />;
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<TestableModal visible={showTestableModal} />
				<Button
					label="Show Testable Modal"
					onClick={() => {
						this.setState({
							showTestableModal: !showTestableModal,
						});
					}}
				/>
				<VFlex style={{ backgroundColor: 'pink' }}>
					<VFlex style={{ backgroundColor: 'red', height: 100 }}>
						<VFlex
							style={{
								height: 20,
								width: 20,
								backgroundColor: 'blue',
							}}
						></VFlex>
					</VFlex>
				</VFlex>
			</SafeAreaView>
		);
		return (
			<>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView
					style={{
						display: 'flex',
						backgroundColor: '#EFEFEF',
						alignItems: 'center',
					}}
				>
					<CreatePost
						userName="Disguised Toast"
						group="Among Us"
						profilePicUrl="https://pbs.twimg.com/profile_images/711015457134813188/7Qcunhqi_400x400.jpg"
					/>
					<Post
						body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa nunc, fringilla vestibulum accumsan id, auctor vel erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque tristique mi sapien, et elementum urna luctus ut. Praesent quam metus, porta vehicula semper non, gravida et quam."
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
					></Post>
					<Post
						body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa nunc, fringilla vestibulum accumsan id, auctor vel erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque tristique mi sapien, et elementum urna luctus ut. Praesent quam metus, porta vehicula semper non, gravida et quam."
						group="Hearthston"
						author="Disguised Toas"
						timestamp="Dec 14 3:45 PM"
						profilePicUrl="https://pbs.twimg.com/profile_images/711015457134813188/7Qcunhqi_400x400.jpg"
						reactions={[
							{
								emoji: '🚀',
								users: ['Austin', 'Brian', 'Helena'],
							},
						]}
					></Post>
				</SafeAreaView>
			</>
		);
	}
}

export default App;
