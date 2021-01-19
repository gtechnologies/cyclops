import {
	ViewProps as RNViewProps,
	ViewStyle as RNViewStyle,
} from 'react-native';
import {
	ViewProps as RNWViewProps,
	ViewStyle as RNWViewStyle,
} from 'react-native-web';

import { ViewPropsWeb, ViewPropsNative } from '../View/ViewTypes';

type CornerType = 'rounded' | 'none';

export type CardPropsWeb = ViewPropsWeb & {
	contentStyle?: RNWViewStyle;

	hideShadow?: boolean;
	cornerType?: CornerType;
};
export type CardPropsNative = ViewPropsNative & {
	contentStyle?: RNViewStyle;

	hideShadow?: boolean;
	cornerType?: CornerType;
};
