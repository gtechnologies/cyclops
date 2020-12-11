import { View as RNWView } from 'react-native-web';
import React from 'react';

import { ViewProps } from './ViewTypes';

export const View = (props: ViewProps) => {
	return <RNWView {...props}>{props.children}</RNWView>;
};
