import React from 'react';
import { ActivityIndicator as RNActivityIndicator } from 'react-native';

import { Colors } from '../../styles/Colors';

import { ActivityIndicatorPropsNative as ActivityIndicatorProps } from './ActivityIndicatorTypes';

export const ActivityIndicator = (props: ActivityIndicatorProps) => {
	return <RNActivityIndicator color={Colors.BASE} {...props} />;
};
