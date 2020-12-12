import { Image as RNWImage, ImageProps } from 'react-native-web';
import React from 'react';

export const Image = (props: ImageProps) => {
	return <RNWImage {...props} />;
};
