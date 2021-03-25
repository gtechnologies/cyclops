import React from 'react';
import {
	Card,
	Chip,
	HFlex,
	Text,
	TouchableOpacity,
	VFlex,
} from 'cyclops/native';

export const ChipTestable = () => {
	return (
		<VFlex alignItemsH="left">
			<HFlex>
				<Chip mode="outlined" style={{ backgroundColor: 'blue' }}>
					Attack
				</Chip>
				<Chip mode="flat" style={{}} disabled onClose={() => {}}>
					Attack
				</Chip>
			</HFlex>
		</VFlex>
	);
};
