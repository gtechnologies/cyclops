import React from 'react';

import {
	TouchableOpacity as RNWTouchableOpacity,
	ViewStyle,
} from 'react-native-web';
import {
	IconButtonPropsWeb as IconButtonProps,
	IconButtonTypeEnum,
	IconButtonType,
} from './IconButtonTypes';
import './IconButtonStyles.css';

import { getOnPressFromProps } from '../../types/Clickable';
import { Colors } from '../../styles/Colors';

const defaultIconButtonStyle: ViewStyle = {
	display: 'flex',
	position: 'relative',
	boxSizing: 'border-box',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: '50%',
	overflow: 'hidden',
};

const getIconButtonStyleForType = (
	iconButtonType: IconButtonType,
	color: string,
): ViewStyle => {
	switch (iconButtonType) {
		case IconButtonTypeEnum.filled:
			return {
				backgroundColor: color,
			};
		case IconButtonTypeEnum.outlined:
			return {
				borderColor: color,
				borderWidth: 2,
				borderStyle: 'solid',
			};
		case IconButtonTypeEnum.ghost:
			return {};
		default:
			return {};
	}
};

export const IconButton = React.forwardRef<
	RNWTouchableOpacity,
	IconButtonProps
>((props, ref) => {
	let iconButtonType: IconButtonType = props.type ? props.type : 'filled';
	let color = props.color ? props.color : Colors.BASE;

	let sizeStyle: ViewStyle = {};
	if (props.size) {
		sizeStyle = { width: props.size, height: props.size };
	}

	let style: ViewStyle = {
		...defaultIconButtonStyle,
		...getIconButtonStyleForType(iconButtonType, color),
		...sizeStyle,
		...props.style,
	};

	let showButtonOverlay = true;
	return (
		<RNWTouchableOpacity
			ref={ref}
			{...props}
			style={style}
			{...getOnPressFromProps(props)}
		>
			{props.icon}
			{props.children}
			{showButtonOverlay && (
				<div
					className={
						props.disabled
							? 'disabledIconButtonOverlay'
							: 'iconButtonOverlay'
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
		</RNWTouchableOpacity>
	);
});
