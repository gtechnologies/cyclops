import React from 'react';
import {
	TouchableOpacity as RNWTouchableOpacity,
	ViewStyle,
} from 'react-native-web';

import { TouchableOpacityPropsWeb as TouchableOpacityProps } from './TouchableOpacityTypes';

import { getOnPressFromProps } from '../../types/Clickable';

import { getAlignStyle } from '../../styles/Alignment';
import { GenericStyleProp } from 'react-native-web/types';

export const TouchableOpacity = React.forwardRef<
	RNWTouchableOpacity,
	TouchableOpacityProps
>((props, ref) => {
	let alignStyle = getAlignStyle(
		props.style,
		props.alignItemsH,
		props.alignItemsV,
	);

	let style: GenericStyleProp<ViewStyle> = {
		...alignStyle,
		...props.style,
	};

	return (
		<RNWTouchableOpacity
			ref={ref}
			{...props}
			style={style}
			{...getOnPressFromProps(props)}
		>
			{props.children}
		</RNWTouchableOpacity>
	);
});
