import React from 'react';
import { SafeAreaView as RNSafeAreaView } from 'react-native';
import { SafeAreaView, View } from 'cyclops/native';

export const SafeAreaViewTestable = () => {
	return (
		<SafeAreaView style={{ backgroundColor: 'red' }}>
			<View
				style={{
					width: '100%',
					height: 200,
					backgroundColor: 'orange',
				}}
			/>
		</SafeAreaView>
	);
};
