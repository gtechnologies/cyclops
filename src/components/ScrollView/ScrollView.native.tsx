import React from 'react';
import { ScrollView as RNScrollView } from 'react-native';

import { ScrollViewPropsNative as ScrollViewProps } from './ScrollViewTypes';

export const ScrollView = (props: ScrollViewProps) => {
	return <RNScrollView {...props} />;
};
