import React from 'react';
import { ScrollView, View } from 'cyclops/native';

export const ScrollViewTestable = () => {
	return (
		<ScrollView style={{ backgroundColor: 'red', height: 200 }}>
			<View style={{ height: 500, backgroundColor: 'orange' }} />
		</ScrollView>
	);
};
