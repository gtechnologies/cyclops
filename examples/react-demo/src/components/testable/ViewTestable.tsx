/**
 * Known Issues:
 * - Tooltip doesn't work well with the cyclops Modal component.
 */
import React from 'react';
import { Tooltip } from '@material-ui/core';
import { Button, HFlex, VFlex, View, TouchableOpacity } from 'cyclops/web';

export const ViewTestable = () => {
	return (
		<View>
			<Tooltip title="Hello" style={{ zIndex: 1000000000 }} open={true}>
				<View
					style={{ height: 20, width: 20, backgroundColor: 'blue' }}
				/>
			</Tooltip>
			<Tooltip title="Hello">
				<TouchableOpacity
					style={{ height: 20, width: 20, backgroundColor: 'red' }}
				/>
			</Tooltip>

			<Tooltip title="Hello" style={{ zIndex: 1000 }}>
				<Button label="test" />
			</Tooltip>
		</View>
	);
};
