import React from 'react';
import { ScrollView as RNWScrollView, ImageProps } from 'react-native-web';

import { ScrollViewPropsWeb as ScrollViewProps } from './ScrollViewTypes';

export const ScrollView = (props: ScrollViewProps) => {
	return <RNWScrollView {...props} />;
};
