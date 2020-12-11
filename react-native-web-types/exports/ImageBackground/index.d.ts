import React from 'react';

import type { ImageProps } from '../Image';
import type { ViewProps } from '../View';

export type ImageBackgroundProps = ImageProps & {
	imageRef?: any;
	imageStyle?: ImageProps['style'];
	style?: ViewProps['style'];
};

export default class ImageBackground extends React.PureComponent<ImageBackgroundProps> {}
