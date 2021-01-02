/**
 * Using @react-native-community/checkbox because react-native deprecated the CheckBox component
 * // TODO: handle Android and Windows coloring
 * // ERROR: https://github.com/react-native-checkbox/react-native-checkbox/issues/35
 * // ERROR: requireNAtiveCompoennt: "RNCCheckbox" was not found in the UIManager
 * --> we will likely have to use another library for this or implement our own
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
