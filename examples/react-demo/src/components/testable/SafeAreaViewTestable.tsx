import React from 'react';
import { SafeAreaView, View } from 'cyclops/native';

export const SafeAreaViewTestable = () => {
	return (
		<SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}>
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
