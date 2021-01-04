import React from 'react';
import { TouchableOpacity as RNTouchableOpacity } from 'react-native';

import { TouchableOpacityPropsNative as TouchableOpacityProps } from './TouchableOpacityTypes';

import { getOnPressFromProps } from '../../types/Clickable';

export const TouchableOpacity = React.forwardRef<
	RNTouchableOpacity,
	TouchableOpacityProps
>((props, ref) => {
	return (
		<RNTouchableOpacity
			ref={ref}
			{...props}
			{...getOnPressFromProps(props)}
		>
			{props.children}
		</RNTouchableOpacity>
	);
});
