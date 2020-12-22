/**
 * // TODO: add overlay if necessary for mobile and handle for disabled
 * // TODO: handle icons when added
 */
import React from 'react';
import { TouchableOpacity, ViewStyle, TextStyle } from 'react-native';

import {
	ButtonPropsNative as ButtonProps,
	ButtonTypeEnum,
	ButtonType,
} from './ButtonTypes';
import { Text } from '../Text/Text.native';
import { getAlignStyle } from '../../styles/Alignment';
import { Padding } from '../../styles/Padding';
import { Colors } from '../../styles/Colors';

const getDefaultButtonStyle = (
	buttonType: ButtonType,
	color: string,
): ViewStyle => {
	switch (buttonType) {
		case ButtonTypeEnum.filled:
			return {
				backgroundColor: color,
			};
		case ButtonTypeEnum.outlined:
			return {
				borderColor: color,
				borderWidth: 2,
				borderStyle: 'solid',
			};
		case ButtonTypeEnum.ghost:
			return {};
		default:
			return {};
	}
};

const getDefaultButtonLabelStyle = (
	buttonType: ButtonType,
	color: string,
): TextStyle => {
	switch (buttonType) {
		case ButtonTypeEnum.filled:
			return {
				color: 'white',
			};
		case ButtonTypeEnum.outlined:
			return {
				color: color,
			};
		case ButtonTypeEnum.ghost:
			return {
				color: color,
			};
		default:
			return {};
	}
};

export const Button = (props: ButtonProps) => {
	let alignStyle = getAlignStyle(
		props.style,
		props.alignItemsH,
		props.alignItemsV,
	);

	let buttonType = props.type ? props.type : 'filled';
	let color = props.color ? props.color : Colors.BASE;

	let style: ViewStyle = {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: Padding.ELEMENT_NATIVE,
		borderRadius: 8,
		...getDefaultButtonStyle(buttonType, color),
		...alignStyle,
		...(props.style as ViewStyle),
	};

	let labelType = props.labelType ? props.labelType : 'subtitle';

	let labelStyle: TextStyle = {
		...getDefaultButtonLabelStyle(buttonType, color),
		...props.labelStyle,
	};

	return (
		<TouchableOpacity {...props} style={style}>
			{props.label && (
				<Text type={labelType} style={labelStyle}>
					{props.label}
				</Text>
			)}
			{props.children}
		</TouchableOpacity>
	);
};
