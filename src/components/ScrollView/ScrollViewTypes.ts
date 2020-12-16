import { ScrollViewProps as RNWScrollViewProps } from 'react-native-web';
import { ScrollViewProps as RNScrollViewProps } from 'react-native';

import { AlignItems } from '../../styles/Alignment';
import { Children } from '../../types/Children';

export type ScrollViewPropsWeb = RNWScrollViewProps & AlignItems & {};
export type ScrollViewPropsNative = RNScrollViewProps &
	AlignItems & {
		children?: Children;
	};
