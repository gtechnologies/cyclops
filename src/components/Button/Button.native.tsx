import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NativeButtonProps } from './ButtonTypes';
import { getAlignStyle } from '../../styles/Alignment';

export const Button = (props: NativeButtonProps) => {
	let alignStyle = getAlignStyle(
		props.style,
		props.alignItemsH,
		props.alignItemsV,
	);
	return (
		<TouchableOpacity {...props} style={{ ...alignStyle, ...props.style }}>
			{props.children}
		</TouchableOpacity>
	);
};
