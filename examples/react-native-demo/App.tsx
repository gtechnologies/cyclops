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

import { Button, Card, TextInput, View } from 'cyclops/native';
import { Post } from './src/components/glimpse/cross/posts/Post';
declare const global: { HermesInternal: null | {} };

const App = () => {
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<Post></Post>
			</SafeAreaView>
		</>
	);
};

export default App;
