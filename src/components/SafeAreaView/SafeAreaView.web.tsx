/**
 * WARNING: has not been tested
 */
import React from 'react';
import { SafeAreaView as RNWSafeAreaView, ViewStyle } from 'react-native-web';
import { GenericStyleProp } from 'react-native-web/types';

import { SafeAreaViewPropsWeb as SafeAreaViewProps } from './SafeAreaViewTypes';

import { getAlignStyle } from '../../styles/Alignment';

export const SafeAreaView = (props: SafeAreaViewProps) => {
	let alignStyle = getAlignStyle(
		props.style,
		props.alignItemsH,
		props.alignItemsV,
	);

	let style: GenericStyleProp<ViewStyle> = {
		...alignStyle,
		...props.style,
	};

	return <RNWSafeAreaView {...props} style={style} />;
};
