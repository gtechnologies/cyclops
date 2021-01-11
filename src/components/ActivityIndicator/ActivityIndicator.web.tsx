import React from 'react';
import { ActivityIndicator as RNWActivityIndicator } from 'react-native-web';

import { Colors } from '../../styles/Colors';

import { ActivityIndicatorPropsWeb as ActivityIndicatorProps } from './ActivityIndicatorTypes';

export const ActivityIndicator = (props: ActivityIndicatorProps) => {
	let color = props.color ? props.color : Colors.BASE;
	return <RNWActivityIndicator color={color} {...props} />;
};
