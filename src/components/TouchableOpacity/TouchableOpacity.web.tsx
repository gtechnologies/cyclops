import React from 'react';
import {
	TouchableOpacity as RNWTouchableOpacity,
	ViewStyle,
} from 'react-native-web';

import { TouchableOpacityPropsWeb as TouchableOpacityProps } from './TouchableOpacityTypes';
import './TouchableOpacityStyles.css';

import { getOnPressFromProps } from '../../types/Clickable';

import { getAlignStyle } from '../../styles/Alignment';
import { GenericStyleProp } from 'react-native-web/types';

export const TouchableOpacity = React.forwardRef<
	RNWTouchableOpacity,
	TouchableOpacityProps
>((props, ref) => {
	let alignStyle = getAlignStyle(
		props.style,
		props.alignItemsH,
		props.alignItemsV,
	);

	let style: GenericStyleProp<ViewStyle> = {
		position: 'relative',
		overflow: 'hidden',
		...alignStyle,
		...props.style,
	};

	let hoverOverlay = !props.disableHoverOverlay && (
		<div
			className={'touchableOpacityOverlay'}
			style={{
				position: 'absolute',
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
			}}
		/>
	);
	return (
		<RNWTouchableOpacity
			ref={ref}
			{...props}
			style={style}
			{...getOnPressFromProps(props)}
		>
			{props.children}
			{hoverOverlay}
		</RNWTouchableOpacity>
	);
});
