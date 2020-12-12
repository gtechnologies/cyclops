import { Image as RNImage, ImageProps } from 'react-native';
import React from 'react';

export const Image = (props: ImageProps) => {
	return <RNImage {...props} />;
};
