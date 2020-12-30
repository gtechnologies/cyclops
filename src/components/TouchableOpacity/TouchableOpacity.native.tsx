import React from 'react';
import { TouchableOpacity as RNTouchableOpacity } from 'react-native';
import { TouchableOpacityPropsNative } from './TouchableOpacityTypes';

export const TextInput = (props: TouchableOpacityPropsNative) => {
	return <RNTouchableOpacity {...props}>{props.children}</RNTouchableOpacity>;
};
