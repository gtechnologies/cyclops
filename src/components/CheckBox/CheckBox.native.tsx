/**
 * Custom CheckBox component
 * react-native deprecated the CheckBox component and @react-native-community/checkbox causes memory overloads when used with web
 */
import React from 'react';
import { ImageStyle, ViewStyle } from 'react-native';

import { CheckBoxPropsNative } from './CheckBoxTypes';
import CheckBoxCheckedImage from './CheckBoxImages/CheckBoxSquareChecked.png';
import CheckBoxUncheckedImage from './CheckBoxImages/CheckBoxSquareUnchecked.png';

import { TouchableOpacity } from '../TouchableOpacity/TouchableOpacity.native';
import { Image } from '../Image/Image.native';

import { getOnPressFromProps } from '../../types/Clickable';
import { Colors } from '../../styles/Colors';

export const CheckBox = (props: CheckBoxPropsNative) => {
	let sizeStyle: ViewStyle = {};
	if (props.size) {
		sizeStyle.height = props.size;
		sizeStyle.width = props.size;
	}

	let style: ViewStyle = {
		...sizeStyle,
		...(props.style as ViewStyle),
	};

	let imageStyle: ImageStyle = {
		width: '100%',
		height: '100%',
	};
	if (props.color) {
		imageStyle.tintColor = props.color;
	}

	return (
		<TouchableOpacity
			{...props}
			style={style}
			{...getOnPressFromProps(props)}
			onClick={() => {
				if (props.onValueChange) props.onValueChange(!props.value);
			}}
		>
			<Image
				source={
					props.value ? CheckBoxCheckedImage : CheckBoxUncheckedImage
				}
				style={imageStyle}
			/>
		</TouchableOpacity>
	);
};

CheckBox.defaultProps = {
	color: Colors.BASE,
	size: 40,
};
