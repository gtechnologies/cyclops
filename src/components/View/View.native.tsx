import React from 'react';
import { View as RNView } from 'react-native';
import { ViewStyle } from 'react-native';

import { getAlignStyle } from '../../styles/Alignment';

import { NativeViewProps } from './ViewTypes';

let defaultViewStyle: ViewStyle = {
	padding: 0,
	margin: 0,
};

export const View = (props: NativeViewProps) => {
	let alignStyle = getAlignStyle(
		props.style,
		props.alignItemsH,
		props.alignItemsV,
	);

	let style = {
		...defaultViewStyle,
		...alignStyle,
		...props.style,
	};

	return (
		<RNView {...props} style={style}>
			{props.children}
		</RNView>
	);
};
