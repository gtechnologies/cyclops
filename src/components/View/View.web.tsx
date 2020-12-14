import React from 'react';
import { View as RNWView, ViewStyle } from 'react-native-web';

import { getAlignStyle } from '../../styles/Alignment';

import { ViewPropsWeb as ViewProps } from './ViewTypes';

let defaultViewStyle: ViewStyle = {
	padding: 0,
	margin: 0,
	boxSizing: 'border-box',
};

export const View: React.FunctionComponent<ViewProps> = (props: ViewProps) => {
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
		<RNWView {...props} style={style}>
			{props.children}
		</RNWView>
	);
};
