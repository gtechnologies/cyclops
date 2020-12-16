import React from 'react';
import { View as RNView } from 'react-native';
import { ViewStyle } from 'react-native';

import { getAlignStyle } from '../../styles/Alignment';

import { ViewPropsNative as ViewProps } from './ViewTypes';

let defaultViewStyle: ViewStyle = {
	padding: 0,
	margin: 0,

	// override React Native default of stretch which causes all items to grow along the cross axis
	// https://reactnative.dev/docs/flexbox#align-items
	alignItems: 'baseline',
};

export const View = (props: ViewProps) => {
	let alignStyle = getAlignStyle(
		props.style,
		props.alignItemsH,
		props.alignItemsV,
	);

	let style: ViewStyle = {
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

export const VFlex = (props: ViewProps) => {
	let alignStyle = getAlignStyle(
		props.style,
		props.alignItemsH,
		props.alignItemsV,
	);

	let style: ViewStyle = {
		flexDirection: 'column',
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

export const HFlex = (props: ViewProps) => {
	let alignStyle = getAlignStyle(
		props.style,
		props.alignItemsH,
		props.alignItemsV,
	);

	let style: ViewStyle = {
		flexDirection: 'row',
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
