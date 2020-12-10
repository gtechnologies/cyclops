import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { View } from '../../react-native';

export default function App() {
	return (
		<SafeAreaView>
			<View style={{ height: 100, width: 100, backgroundColor: 'red' }}>
				<Text>Open up App.tsx to start working on your app!</Text>
				<StatusBar style="auto" />
			</View>
		</SafeAreaView>
	);
}
