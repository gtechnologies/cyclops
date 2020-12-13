import { ViewProps as RNWViewProps } from 'react-native-web';
import { ViewProps as RNViewProps } from 'react-native';

import { AlignItems, AlignItemsHOptions } from '../../styles/Alignment';
import { Children } from '../../types/Children';

export type ViewProps = RNWViewProps & AlignItems & {};
export type NativeViewProps = RNViewProps &
	AlignItems & {
		children?: Children;
	};
