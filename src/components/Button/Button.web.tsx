import React from 'react';
import { TouchableOpacity, ViewStyle, TextStyle } from 'react-native-web';

import { ButtonPropsWeb as ButtonProps, ButtonTypeEnum } from './ButtonTypes';
import { Text } from '../Text/Text.native';
import { getAlignStyle } from '../../styles/Alignment';
import { Padding } from '../../styles/Padding';
import { Colors } from '../../styles/Colors';

let defaultButtonStyleDictionary: { [type: string]: ViewStyle } = {
	[ButtonTypeEnum.filled]: {
		backgroundColor: Colors.BASE,
	},
	[ButtonTypeEnum.outlined]: {
		borderColor: Colors.BASE,
		borderWidth: 2,
		borderStyle: 'solid',
	},
	[ButtonTypeEnum.ghost]: {},
};

let defaultButtonLabelStyleDictionary: { [type: string]: TextStyle } = {
	[ButtonTypeEnum.filled]: {
		color: 'white',
	},
	[ButtonTypeEnum.outlined]: {
		color: Colors.BASE,
	},
	[ButtonTypeEnum.ghost]: {
		color: Colors.GRAY,
	},
};

export const Button = (props: ButtonProps) => {
	let alignStyle = getAlignStyle(
		props.style,
		props.alignItemsH,
		props.alignItemsV,
	);

	let buttonType = props.type ? props.type : 'filled';
	let style: ViewStyle = {
		justifyContent: 'center',
		alignItems: 'center',
		padding: Padding.ELEMENT_WEB,
		borderRadius: 8,
		...defaultButtonStyleDictionary[buttonType],
		...alignStyle,
		...props.style,
	};

	let labelType = props.labelType ? props.labelType : 'subtitle';

	let labelStyle = {
		...defaultButtonLabelStyleDictionary[buttonType],
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
