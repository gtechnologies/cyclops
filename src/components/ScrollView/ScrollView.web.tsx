/**
 * ERROR: this component is currently not working as expected
 */
import React from 'react';
import { ScrollView as RNWScrollView } from 'react-native-web';

import { ScrollViewPropsWeb as ScrollViewProps } from './ScrollViewTypes';

export const ScrollView = (props: ScrollViewProps) => {
	return <RNWScrollView {...props} />;
};
