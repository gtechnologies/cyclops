/**
 * Known Issues:
 * - Tooltip doesn't work well with the cyclops Modal component.
 */
import React from 'react';
import { Button, HFlex, VFlex, View, TouchableOpacity } from 'cyclops/native';

export const ViewTestable = () => {
	return (
		<View>
			<View style={{ height: 20, width: 20, backgroundColor: 'blue' }} />

			<TouchableOpacity
				style={{ height: 20, width: 20, backgroundColor: 'red' }}
			/>
			<Button label="test" />
		</View>
	);
};
