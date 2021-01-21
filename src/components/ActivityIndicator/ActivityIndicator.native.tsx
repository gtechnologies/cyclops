import React from 'react';
import { ActivityIndicator as RNActivityIndicator } from 'react-native';

import { Colors } from '../../styles/Colors';

import { ActivityIndicatorPropsNative as ActivityIndicatorProps } from './ActivityIndicatorTypes';

export const ActivityIndicator = (props: ActivityIndicatorProps) => {
	let color = props.color ? props.color : Colors.BASE;
	return <RNActivityIndicator color={color} {...props} />;
};
