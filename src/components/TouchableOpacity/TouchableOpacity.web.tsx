import React from 'react';
import { TouchableOpacity as RNWTouchableOpacity } from 'react-native-web';

import { TouchableOpacityPropsWeb as TouchableOpacityProps } from './TouchableOpacityTypes';

import { getOnPressFromProps } from '../../types/Clickable';

export const TouchableOpacity = React.forwardRef<
	RNWTouchableOpacity,
	TouchableOpacityProps
>((props, ref) => {
	return (
		<RNWTouchableOpacity
			ref={ref}
			{...props}
			{...getOnPressFromProps(props)}
		>
			{props.children}
		</RNWTouchableOpacity>
	);
});
