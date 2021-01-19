import React from 'react';
import { Card, VFlex } from 'cyclops/web';

export const CardTestable = () => {
	return (
		<VFlex>
			<Card
				style={{
					width: 100,
					height: 100,
					margin: 20,
					backgroundColor: 'lightred',
				}}
				cornerType="none"
			/>
			<Card
				style={{
					width: 100,
					height: 100,
					margin: 20,
					backgroundColor: 'lightblue',
				}}
			/>
			<Card
				style={{
					width: 100,
					height: 100,
					margin: 20,
					backgroundColor: 'lightgreen',
				}}
				hideShadow
			/>
		</VFlex>
	);
};
