import { View as RNView } from 'react-native';
import React from 'react';

import { getAlignStyle } from '../../styles/Alignment';

import { NativeViewProps } from './ViewTypes';

export const View = (props: NativeViewProps) => {
	let alignStyle = getAlignStyle(
		props.style,
		props.alignItemsH,
		props.alignItemsV,
	);
	return (
		<RNView {...props} style={{ ...alignStyle, ...props.style }}>
			{props.children}
		</RNView>
	);
};