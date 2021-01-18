import React from 'react';
import { Text, VFlex } from 'cyclops/native';

export const TextTestable = () => {
	return (
		<VFlex>
			<Text type="pagetitle">Hello</Text>
			<Text type="title">Hello</Text>
			<Text type="subtitle">Hello</Text>
			<Text type="headline">Hello</Text>
			<Text type="body">Hello</Text>
		</VFlex>
	);
};
