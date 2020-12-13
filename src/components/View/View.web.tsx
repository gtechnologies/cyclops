import { View as RNWView } from 'react-native-web';
import React from 'react';

import { getAlignStyle } from '../../styles/Alignment';

import { ViewProps } from './ViewTypes';

export const View: React.FunctionComponent<ViewProps> = (props: ViewProps) => {
	let alignStyle = getAlignStyle(
		props.style,
		props.alignItemsH,
		props.alignItemsV,
	);
	return (
		<RNWView {...props} style={{ ...alignStyle, ...props.style }}>
			{props.children}
		</RNWView>
	);
};
