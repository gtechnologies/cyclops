import React from 'react';
import { Card, Text, View } from 'cyclops/native';

export const Post: React.FunctionComponent = () => {
	return (
		<Card>
			<View>
				<Text type="pagetitle">Page Title</Text>
				<Text type="title">Title</Text>
				<Text type="subtitle">Sub Title</Text>
				<Text type="body">Body</Text>
			</View>
		</Card>
	);
};
