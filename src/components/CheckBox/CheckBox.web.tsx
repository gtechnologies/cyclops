import React from 'react';
import { CheckBox as RNWCheckBox, ViewStyle } from 'react-native-web';

import { CheckBoxPropsWeb } from './CheckBoxTypes';

import { getOnPressFromProps } from '../../types/Clickable';
import { Colors } from '../../styles/Colors';

export const CheckBox = (props: CheckBoxPropsWeb) => {
	let sizeStyle: ViewStyle = {};
	if (props.size) {
		sizeStyle.height = props.size;
		sizeStyle.width = props.size;
	}

	let style: ViewStyle = {
		...sizeStyle,
		...(props.style as ViewStyle),
	};

	return (
		<RNWCheckBox
			color={props.color}
			{...props}
			style={style}
			{...getOnPressFromProps(props)}
		/>
	);
};

CheckBox.defaultProps = {
	color: Colors.BASE,
	size: 40,
};
