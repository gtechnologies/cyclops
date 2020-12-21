import React from 'react';
import { View as RNWView, ViewStyle } from 'react-native-web';
import { GenericStyleProp } from 'react-native-web/types';

import { getAlignStyle } from '../../styles/Alignment';

import { ViewPropsWeb as ViewProps } from './ViewTypes';

let defaultViewStyle: ViewStyle = {
	padding: 0,
	margin: 0,
	boxSizing: 'border-box',
};

// REMOVED: alignItems: 'baseline',

export const View: React.FunctionComponent<ViewProps> = (props: ViewProps) => {
	let alignStyle = getAlignStyle(
		props.style,
		props.alignItemsH,
		props.alignItemsV,
	);

	let style: GenericStyleProp<ViewStyle> = {
		...defaultViewStyle,
		...alignStyle,
		...props.style,
	};

	return (
		<RNWView {...props} style={style}>
			{props.children}
		</RNWView>
	);
};

export const VFlex: React.FunctionComponent<ViewProps> = (props: ViewProps) => {
	let alignStyle = getAlignStyle(
		{ flexDirection: 'column', ...props.style },
		props.alignItemsH,
		props.alignItemsV,
	);

	let style: GenericStyleProp<ViewStyle> = {
		flexDirection: 'column',
		...defaultViewStyle,
		...alignStyle,
		...props.style,
	};

	return (
		<RNWView {...props} style={style}>
			{props.children}
		</RNWView>
	);
};

export const HFlex: React.FunctionComponent<ViewProps> = (props: ViewProps) => {
	let alignStyle = getAlignStyle(
		{ flexDirection: 'row', ...props.style },
		props.alignItemsH,
		props.alignItemsV,
	);

	let style: GenericStyleProp<ViewStyle> = {
		flexDirection: 'row',
		...defaultViewStyle,
		...alignStyle,
		...props.style,
	};

	return (
		<RNWView {...props} style={style}>
			{props.children}
		</RNWView>
	);
};
