import React from 'react';
import { ViewStyle } from 'react-native';

import { TouchableOpacity } from '../TouchableOpacity/TouchableOpacity.native';
import { View } from '../View/View.native';

import { RadioButtonPropsNative as RadioButtonProps } from './RadioButtonTypes';

import { getOnPressFromProps } from '../../types/Clickable';
import { Colors } from '../../styles/Colors';

export const RadioButton = React.forwardRef<
	typeof TouchableOpacity,
	RadioButtonProps
>((props, ref) => {
	let size = props.size ? props.size : 30;
	let color = props.color ? props.color : Colors.BASE;

	let style: ViewStyle = {
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
