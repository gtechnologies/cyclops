import React from 'react';
import { TouchableOpacity } from 'react-native-web';
import { ButtonProps } from './ButtonTypes';
import { getAlignStyle } from '../../styles/Alignment';

export const Button = (props: ButtonProps) => {
	let alignStyle = getAlignStyle(
		props.style,
		props.alignItemsH,
		props.alignItemsV,
	);
	return (
		<TouchableOpacity style={{ ...alignStyle }} {...props}>
			{props.children}
		</TouchableOpacity>
	);
};
