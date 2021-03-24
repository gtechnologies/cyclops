/**
 * // TODO: add overlay if necessary for mobile and handle for disabled
 * // TODO: handle icons when added
 */
import React from 'react';
import {
	TouchableOpacity as RNTouchableOpacity,
	ViewStyle,
	TextStyle,
} from 'react-native';

import {
	ButtonPropsNative as ButtonProps,
	ButtonTypeEnum,
	ButtonType,
} from './ButtonTypes';

import { Text } from '../Text/Text.native';
import { VFlex } from '../View/View.native';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator.native';
import { getAlignStyle } from '../../styles/Alignment';
import { Padding } from '../../styles/Padding';
import { Colors } from '../../styles/Colors';
import { getOnPressFromProps } from '../../types/Clickable';

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

export const Button = React.forwardRef<RNTouchableOpacity, ButtonProps>(
	(props, ref) => {
		let alignStyle = getAlignStyle(
			props.style,
			props.alignItemsH,
			props.alignItemsV,
		);

		// if no type is present, use 'filled' when there is a label, otherwise 'none'
		let buttonType = props.type
			? props.type
			: props.label
			? 'filled'
			: 'none';
		let color = props.color ? props.color : Colors.BASE;

		let style: ViewStyle = {
			flexDirection: 'row',
			position: 'relative',
			overflow: 'hidden',
			justifyContent: 'center',
			alignItems: 'center',
			padding: Padding.ELEMENT_NATIVE,
			borderRadius: 8,
			...getDefaultButtonStyle(buttonType, color),
			...alignStyle,
			...(props.style as ViewStyle),
		};

		let labelType = props.labelType ? props.labelType : 'button';

		let labelStyle: TextStyle = {
			...getDefaultButtonLabelStyle(buttonType, color),
			...props.labelStyle,
		};

		return (
			<RNTouchableOpacity
				ref={ref}
				{...props}
				style={style}
				{...getOnPressFromProps(props)}
			>
				{props.icon && (
					<VFlex
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							marginRight: 8,
						}}
					>
						{props.icon}
					</VFlex>
				)}
				{props.label && (
					<Text type={labelType} style={labelStyle}>
						{props.label}
					</Text>
				)}
				{props.children}

				{props.loading && (
					<ActivityIndicator
						color={'white'}
						style={{ position: 'absolute', right: 10 }}
					/>
				)}
			</RNTouchableOpacity>
		);
	},
);
