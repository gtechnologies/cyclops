/**
 * ISSUE:
 * - When using the hover/disabled buttonOverlay on a outlined button, the overlay doesn't extend to the border.
 * - This issue can be resolved if you have a parent div and make the button and overlay both children.
 */
import React from 'react';
import { TouchableOpacity, ViewStyle, TextStyle } from 'react-native-web';

import {
	ButtonPropsWeb as ButtonProps,
	ButtonType,
	ButtonTypeEnum,
} from './ButtonTypes';
import './ButtonStyles.css';

import { Text } from '../Text/Text.web';
import { getAlignStyle } from '../../styles/Alignment';
import { Padding } from '../../styles/Padding';
import { Colors } from '../../styles/Colors';
import { getOnPressFromProps } from '../../types/Clickable';

import { VFlex } from '../../../web';

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

export const Button = React.forwardRef<TouchableOpacity, ButtonProps>(
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
			padding: Padding.ELEMENT_WEB,
			borderRadius: 8,
			// keep border to be inside of div
			boxSizing: 'border-box',
			...getDefaultButtonStyle(buttonType, color),
			...alignStyle,
			...props.style,
		};

		let labelType = props.labelType ? props.labelType : 'subtitle';

		let labelStyle = {
			...getDefaultButtonLabelStyle(buttonType, color),
			...props.labelStyle,
		};

		let showButtonOverlay = buttonType !== 'none';

		return (
			<TouchableOpacity
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
				{/* this div is based off of Facebook's styling for buttons that change color on hover */}
				{showButtonOverlay && (
					<div
						className={
							props.disabled
								? 'disabledButtonOverlay'
								: 'buttonOverlay'
						}
						style={{
							position: 'absolute',
							top: 0,
							bottom: 0,
							left: 0,
							right: 0,
						}}
					/>
				)}
			</TouchableOpacity>
		);
	},
);
