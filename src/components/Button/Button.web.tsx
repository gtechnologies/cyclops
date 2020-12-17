import React from 'react';
import { TouchableOpacity, ViewStyle, TextStyle } from 'react-native-web';

import {
	ButtonPropsWeb as ButtonProps,
	ButtonType,
	ButtonTypeEnum,
} from './ButtonTypes';
import { Text } from '../Text/Text.web';
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
		justifyContent: 'center',
		alignItems: 'center',
		padding: Padding.ELEMENT_WEB,
		borderRadius: 8,
		...getDefaultButtonStyle(buttonType, color),
		...alignStyle,
		...props.style,
	};

	let labelType = props.labelType ? props.labelType : 'subtitle';

	let labelStyle = {
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
