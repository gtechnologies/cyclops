import { ViewProps as RNWViewProps } from 'react-native-web';
import { ViewProps as RNViewProps } from 'react-native';

import { AlignItems } from '../../styles/Alignment';
import { Children } from '../../types/Children';

export type ViewPropsWeb = RNWViewProps & AlignItems & {};
export type ViewPropsNative = RNViewProps &
	AlignItems & {
		children?: Children;
	};
