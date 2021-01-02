import React from 'react';
import {
	TouchableOpacity as RNWTouchableOpacity,
	TouchableOpacityProps,
} from 'react-native-web';

import { getOnPressFromProps } from '../../types/Clickable';

export const TouchableOpacity = (props: TouchableOpacityProps) => {
	return (
		<RNWTouchableOpacity {...props} {...getOnPressFromProps(props)}>
			{props.children}
		</RNWTouchableOpacity>
	);
};
