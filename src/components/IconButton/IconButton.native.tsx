import React from 'react';

import { TouchableOpacity as RNTouchableOpacity } from 'react-native';
import { IconButtonPropsNative as IconButtonProps } from './IconButtonTypes';

import { getOnPressFromProps } from '../../types/Clickable';

export const IconButton = (props: IconButtonProps) => {
	return (
		<RNTouchableOpacity {...props} {...getOnPressFromProps(props)}>
			{props.icon}
			{props.children}
		</RNTouchableOpacity>
	);
};
