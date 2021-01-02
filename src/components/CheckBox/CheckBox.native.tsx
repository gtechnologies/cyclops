/**
 * Using @react-native-community/checkbox because react-native deprecated the CheckBox component
 * // TODO: handle Android and Windows coloring
 * // ERROR: https://github.com/react-native-checkbox/react-native-checkbox/issues/35
 * // ERROR: requireNAtiveCompoennt: "RNCCheckbox" was not found in the UIManager
 * --> we will likely have to use another library for this or implement our own
 */
import React from 'react';
import RNCheckBox from '@react-native-community/checkbox';

import { CheckBoxPropsNative } from './CheckBoxTypes';

import { Colors } from '../../styles/Colors';

let defaultCheckBoxProps: CheckBoxPropsNative = {
	onCheckColor: Colors.BASE,
	boxType: 'square',
};

export const CheckBox = (props: CheckBoxPropsNative) => {
	let defaultProps: CheckBoxPropsNative = {
		...defaultCheckBoxProps,
		...props,
	};
	if (props.color) {
		// @ts-ignore
		defaultProps.tintColor = props.color;
	}
	return <RNCheckBox {...defaultProps} />;
};
