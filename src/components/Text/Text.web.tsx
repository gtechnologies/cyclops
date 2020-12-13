import React from 'react';
import { Text as RNWText, TextProps } from 'react-native-web';

export const Text = (props: TextProps) => {
	return <RNWText {...props} />;
};
