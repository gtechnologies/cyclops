import React from 'react';
import { ViewStyle } from 'react-native-web';

import { GenericStyleProp } from 'react-native-web/types';

import { TouchableOpacity } from '../TouchableOpacity/TouchableOpacity.web';
import { View } from '../View/View.web';

import { RadioButtonPropsWeb as RadioButtonProps } from './RadioButtonTypes';

import { getOnPressFromProps } from '../../types/Clickable';
import { Colors } from '../../styles/Colors';

export const RadioButton = React.forwardRef<
	typeof TouchableOpacity,
	RadioButtonProps
>((props, ref) => {
	let size = props.size ? props.size : 30;
	let color = props.color ?? Colors.BASE;

	let style: GenericStyleProp<ViewStyle> = {
		height: size,
		width: size,
		borderRadius: size / 2,
		borderWidth: 2,
		borderColor: color,
		alignItems: 'center',
		justifyContent: 'center',
		...props.style,
	};
	return (
		<TouchableOpacity
			ref={ref}
			style={style}
			{...getOnPressFromProps(props)}
			onClick={() => {
				if (props.onValueChange) props.onValueChange(!props.selected);
			}}
		>
			{props.selected && (
				<View
					style={{
						height: size / 2,
						width: size / 2,
						borderRadius: size / 4,
						backgroundColor: color,
					}}
				/>
			)}
		</TouchableOpacity>
	);
});

RadioButton.defaultProps = {
	size: 30,
	color: Colors.BASE,
};
/*
export function RadioButton(props: RadioButtonProps) {
	let style: GenericStyleProp<ViewStyle> = {
		height: 24,
		width: 24,
		borderRadius: 12,
		borderWidth: 2,
		borderColor: Colors.BASE,
		alignItems: 'center',
		justifyContent: 'center',
		...props.style,
	};
	return (
		<View style={{ ...style, borderRadius: (style.height as number) / 2 }}>
			{props.selected ? (
				<View
					style={{
						height: (style.height as number) / 2,
						width: (style.width as number) / 2,
						borderRadius: (style.height as number) / 4,
						backgroundColor: style.borderColor,
					}}
				/>
			) : null}
		</View>
	);
}
*/
