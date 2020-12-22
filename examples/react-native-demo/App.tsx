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

import { Button, Card, CheckBox, TextInput, View, VFlex } from 'cyclops/native';
import { Post } from './src/components/glimpse/cross/posts/Post';
import { CreatePost } from './src/components/glimpse/cross/posts/CreatePost';
import { JsxElement } from 'typescript';
declare const global: { HermesInternal: null | {} };

const App = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<CheckBox />
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
						{ emoji: '🚀', users: ['Austin', 'Brian', 'Helena'] },
					]}
				></Post>
				<Post
					body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa nunc, fringilla vestibulum accumsan id, auctor vel erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque tristique mi sapien, et elementum urna luctus ut. Praesent quam metus, porta vehicula semper non, gravida et quam."
					group="Hearthston"
					author="Disguised Toas"
					timestamp="Dec 14 3:45 PM"
					profilePicUrl="https://pbs.twimg.com/profile_images/711015457134813188/7Qcunhqi_400x400.jpg"
					reactions={[
						{ emoji: '🚀', users: ['Austin', 'Brian', 'Helena'] },
					]}
				></Post>
			</SafeAreaView>
		</>
	);
};

export default App;
