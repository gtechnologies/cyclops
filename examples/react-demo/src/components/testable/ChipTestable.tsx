import React from 'react';
import { Card, Chip, HFlex, Text, TouchableOpacity, VFlex } from 'cyclops/web';

export const ChipTestable = () => {
	return (
		<VFlex alignItemsH="left">
			<HFlex>
				<Chip label="hello" style={{ backgroundColor: 'blue' }} />
				<Chip label="hello" variant="outlined" style={{}} />
			</HFlex>
		</VFlex>
	);
};
