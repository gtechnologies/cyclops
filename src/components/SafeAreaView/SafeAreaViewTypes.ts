import { SafeAreaViewProps as RNWSafeAreaViewProps } from 'react-native-web';
import { ViewProps as RNSafeAreaViewProps } from 'react-native';

import { AlignItems } from '../../styles/Alignment';
import { Children } from '../../types/Children';

export type SafeAreaViewPropsWeb = RNWSafeAreaViewProps & AlignItems & {};
export type SafeAreaViewPropsNative = RNSafeAreaViewProps &
	AlignItems & {
		children?: Children;
	};
