import React from 'react';
import {
	TouchableOpacity as RNTouchableOpacity,
	ViewStyle,
} from 'react-native';

import { TouchableOpacityPropsNative as TouchableOpacityProps } from './TouchableOpacityTypes';

import { getOnPressFromProps } from '../../types/Clickable';

import { getAlignStyle } from '../../styles/Alignment';

export const TouchableOpacity = React.forwardRef<
	RNTouchableOpacity,
	TouchableOpacityProps
>((props, ref) => {
	let alignStyle = getAlignStyle(
		props.style,
		props.alignItemsH,
		props.alignItemsV,
	);

	let style = {
		...alignStyle,
		...(props.style as ViewStyle),
	};

	return (
		<RNTouchableOpacity
			ref={ref}
			{...props}
			style={style}
			{...getOnPressFromProps(props)}
		>
			{props.children}
		</RNTouchableOpacity>
	);
});
