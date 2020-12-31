import React from 'react';
import { ScrollView, View } from 'cyclops/native';

export const ScrollViewTestable = () => {
	return (
		<ScrollView>
			<View style={{ height: 500, backgroundColor: 'orange' }} />
		</ScrollView>
	);
};
