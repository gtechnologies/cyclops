import React from 'react';
import { TouchableOpacity as RNTouchableOpacity } from 'react-native';
import { TouchableOpacityPropsNative } from './TouchableOpacityTypes';

import { getOnPressFromProps } from '../../types/Clickable';

export const TouchableOpacity = (props: TouchableOpacityPropsNative) => {
	return (
		<RNTouchableOpacity {...props} {...getOnPressFromProps(props)}>
			{props.children}
		</RNTouchableOpacity>
	);
};
