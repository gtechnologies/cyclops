import React from 'react';
import { Card, Text, View } from 'cyclops/web';

export const Post: React.FunctionComponent = () => {
	return (
		<Card>
			<View>
				<Text type="subtitle">
					This is the content of a bit of a longer post that is kinda
					somewhat janky like
				</Text>
			</View>
		</Card>
	);
};
