import { ViewProps as RNWViewProps } from 'react-native-web';
import { ViewProps as RNViewProps } from 'react-native';

import { AlignItems, AlignItemsHOptions } from '../../styles/Alignment';
import { ReactNode } from 'react';

export type ViewProps = RNWViewProps & AlignItems & {};
export type NativeViewProps = RNViewProps &
	AlignItems & {
		children?: ReactNode;
	};
