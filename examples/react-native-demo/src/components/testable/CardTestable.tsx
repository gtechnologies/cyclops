import React from 'react';
import { Card, Text, TouchableOpacity, VFlex } from 'cyclops/native';

export const CardTestable = () => {
	return (
		<VFlex>
			<Card
				style={{
					width: 100,
					height: 100,
					margin: 20,
					backgroundColor: 'red',
				}}
				cornerType="none"
			/>
			{/** Known visual bug: TouchableOpacity wrapped around an elevated view on Android */}
			{/** https://github.com/facebook/react-native/issues/15889 */}
			<TouchableOpacity>
				<Card
					style={{
						width: 100,
						height: 100,
						margin: 20,
						backgroundColor: 'lightblue',
					}}
				></Card>
			</TouchableOpacity>
			<TouchableOpacity>
				<Card
					style={{
						width: 100,
						height: 100,
						margin: 20,
						backgroundColor: 'lightgreen',
					}}
					hideShadow
				/>
			</TouchableOpacity>
			<VFlex
				style={{
					width: 300,
					backgroundColor: 'cyan',
					height: 300,
					//overflow: 'scroll',
				}}
			>
				<Card>
					<Text>Hello</Text>
				</Card>
				<Card>
					<Text>Hello</Text>
				</Card>
				<Card>
					<Text>Hello</Text>
				</Card>
			</VFlex>
		</VFlex>
	);
};
