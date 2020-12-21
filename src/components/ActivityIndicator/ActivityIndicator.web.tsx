import React from 'react';
import { ActivityIndicator as RNWActivityIndicator } from 'react-native-web';

import { Colors } from '../../styles/Colors';

import { ActivityIndicatorPropsWeb as ActivityIndicatorProps } from './ActivityIndicatorTypes';

export const ActivityIndicator = (props: ActivityIndicatorProps) => {
	return <RNWActivityIndicator color={Colors.BASE} {...props} />;
};
