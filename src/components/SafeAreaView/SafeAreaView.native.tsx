/**
 * WARNING: has not been tested
 */
import React from 'react';
import { SafeAreaView as RNSafeAreaView, ViewStyle } from 'react-native';

import { SafeAreaViewPropsNative as SafeAreaViewProps } from './SafeAreaViewTypes';

import { getAlignStyle } from '../../styles/Alignment';

export const SafeAreaView = (props: SafeAreaViewProps) => {
	let alignStyle = getAlignStyle(
		props.style,
		props.alignItemsH,
		props.alignItemsV,
	);

	let style: ViewStyle = {
		...alignStyle,
		...(props.style as ViewStyle),
	};

	return <RNSafeAreaView {...props} style={style} />;
};
