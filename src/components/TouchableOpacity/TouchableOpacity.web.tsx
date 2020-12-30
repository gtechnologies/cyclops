import React from 'react';
import {
	TouchableOpacity as RNWTouchableOpacity,
	TouchableOpacityProps,
} from 'react-native-web';

export const TouchableOpacity = (props: TouchableOpacityProps) => {
	return (
		<RNWTouchableOpacity {...props}>{props.children}</RNWTouchableOpacity>
	);
};
